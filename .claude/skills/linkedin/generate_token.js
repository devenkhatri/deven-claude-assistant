#!/usr/bin/env node

const http = require('http');
const https = require('https');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '..', '..', '.env');

// Read env
let clientId = '';
let clientSecret = '';
try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const idMatch = envContent.match(/LINKEDIN_CLIENT_ID=(.*)/);
    const secretMatch = envContent.match(/LINKEDIN_CLIENT_SECRET=(.*)/);
    if (idMatch) clientId = idMatch[1].trim();
    if (secretMatch) clientSecret = secretMatch[1].trim();
} catch (e) {
    console.error("Could not read .env file");
}

if (!clientId || !clientSecret) {
    console.error("❌ ERROR: Please add LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET to your .env file.");
    process.exit(1);
}

const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPE = 'w_member_social openid profile email';

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/') {
        const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=123456&scope=${encodeURIComponent(SCOPE)}`;
        res.writeHead(302, { 'Location': authUrl });
        res.end();
    } else if (reqUrl.pathname === '/callback') {
        const code = reqUrl.query.code;
        if (!code) {
            res.writeHead(400);
            res.end("No code found in the callback url.");
            process.exit(1);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h2 style='font-family: sans-serif; color: green;'>Authorization successful! You can close this window and look at your terminal.</h2>");
        res.end();

        console.log("Catching callback code and exchanging for access token...");

        // Exchange code for token
        const payload = querystring.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            client_id: clientId,
            client_secret: clientSecret
        });

        const options = {
            hostname: 'www.linkedin.com',
            path: '/oauth/v2/accessToken',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const postReq = https.request(options, (postRes) => {
            let data = '';
            postRes.on('data', chunk => data += chunk);
            postRes.on('end', () => {
                const parsed = JSON.parse(data);
                if (parsed.access_token) {
                    console.log("\n✅ SUCCESS! Here is your 2-month LINKEDIN_ACCESS_TOKEN:\n");
                    console.log(parsed.access_token);
                    console.log("\n👉 Please copy the token above and add it to your .env file as LINKEDIN_ACCESS_TOKEN=...\n");
                    process.exit(0);
                } else {
                    console.error("\n❌ Failed to get token:", parsed);
                    process.exit(1);
                }
            });
        });
        postReq.write(payload);
        postReq.end();
    }
});

server.listen(3000, () => {
    console.log("🚀 Local Auth Server started!");
    console.log("-------------------------------------------------------------------");
    console.log("1. Go to your LinkedIn Developer Portal > Auth tab.");
    console.log("2. Under 'OAuth 2.0 settings', add 'http://localhost:3000/callback' as an Authorized redirect URL.");
    console.log("3. Once saved, open your browser and go to: http://localhost:3000");
    console.log("-------------------------------------------------------------------");
    console.log("Waiting for browser validation...");
});
