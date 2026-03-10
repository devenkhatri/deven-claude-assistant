#!/usr/bin/env node

/**
 * OpenRouter Research Synthesizer
 * 
 * Usage: node openrouter_research.js <prompt_file_or_string> <context_file_or_string>
 * 
 * If the argument ends with .txt or .md, the script will attempt to read the contents of the file.
 * Otherwise, it will treat the argument as the raw string to process.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// 1. Read openrouter API key from .env file
const envPath = path.join(__dirname, '..', '..', '..', '.env');
let apiKey = null;

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/OPENROUTER_API_KEY=(.*)/);
    if (match && match[1]) {
        apiKey = match[1].trim();
    }
} catch (error) {
    console.error("Warning: Could not read .env file at", envPath);
}

if (!apiKey || apiKey === 'your_api_key_here') {
    console.error("Error: OPENROUTER_API_KEY is not set or still has the placeholder value in .env");
    process.exit(1);
}

// 2. Parse arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Usage: node openrouter_research.js <prompt_file_or_string> <context_file_or_string>");
    process.exit(1);
}

function resolveArgument(arg) {
    if (arg.endsWith('.txt') || arg.endsWith('.md') || arg.endsWith('.json')) {
        try {
            return fs.readFileSync(path.resolve(arg), 'utf8');
        } catch (err) {
            console.warn(`Warning: Could not read file ${arg}. Treating as raw string.`);
        }
    }
    return arg;
}

const userPrompt = resolveArgument(args[0]);
const userContext = resolveArgument(args[1]);

// 3. Construct the prompt
const systemPrompt = `You are an expert researcher and strategic advisor.
Your task is to synthesize raw research data and align it with the user's specific goals and context.

You must output your findings in STRICT Markdown format with the following exact structure:

# [Topic Title]

## Summary
[Key highlights aligned to the user's goals]

## Findings
[In-depth analysis with relevant subsections]

## Recommendations
[Actionable strategic steps the user can take based on their priorities]

## Sources
[A markdown list of URLs with brief descriptions of what was found there]`;

const finalPrompt = `
Here is the user's personal/business context and priorities:
<context>
${userContext}
</context>

Here is the raw data and the specific research request:
<research_data>
${userPrompt}
</research_data>

Please synthesize this research according to the system instructions.`;

// 4. Make the OpenRouter Request
async function callOpenRouter() {
    const payload = JSON.stringify({
        model: 'openrouter/free',
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: finalPrompt }
        ]
    });

    const options = {
        hostname: 'openrouter.ai',
        path: '/api/v1/chat/completions',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.choices && parsed.choices.length > 0) {
                            resolve(parsed.choices[0].message.content);
                        } else {
                            reject(new Error("No choices returned from OpenRouter: " + data));
                        }
                    } catch (e) {
                        reject(new Error("Failed to parse OpenRouter response: " + data));
                    }
                } else {
                    reject(new Error(`OpenRouter API Error (${res.statusCode}): ${data}`));
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.write(payload);
        req.end();
    });
}

(async () => {
    try {
        const result = await callOpenRouter();
        console.log(result);
    } catch (error) {
        console.error("Research Synthesis Failed:");
        console.error(error.message);
        process.exit(1);
    }
})();
