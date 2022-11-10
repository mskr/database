# database
Multi-user database in a git repository

## Proof of Concept

- Users will be able to create subdirectories in this repo from a web interface
- Users receive a fresh token on every page reload ([`https://mskr.github.io/database?token=<token>`](https://mskr.github.io/database?token=<token>))
  - Users can also choose a username as token by manually entering it (`https://mskr.github.io/database?token=<username>`) if it was not taken
  - The token/username is a password and should be private
- Directory name is oneway hash of token: a directory can not traced back to its owner
- Drag and drop to upload files to the directory
- Files are encrypted in the browser
- Files can be decrypted with the token/username
