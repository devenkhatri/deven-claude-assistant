# Git Commit Rules

When making changes to files within this project, the assistant MUST follow these rules regarding version control:

1. **Automatic Commits for Additions/Modifications:** 
   - If you create a new file or update an existing file, you MUST immediately stage and commit those changes to Git (`git add <file>` and `git commit -m "..."`). 
   - You do NOT need explicit user approval to commit creations and updates.

2. **Approval Required for Deletions:**
   - If a task requires deleting a file, you MUST NOT commit the deletion immediately. 
   - You must first notify the user and explicitly ask for approval to commit the deletion.
   - Only after receiving user approval may you run `git add/rm` and `git commit` for the deleted file.
