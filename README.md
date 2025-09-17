# Random Quote Generator

A simple Node.js command-line tool that generates a random inspirational quote from a predefined list.

## Features
- Generates a random quote on each run.
- Self-contained with no external dependencies for runtime.
- Tested with Mocha and Chai.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```
   Or directly:
   ```bash
   node index.js
   ```

## Testing
Run tests:
```bash
npm test
```

## GitHub Actions
The project uses GitHub Actions for CI:
- Triggers on push and pull requests to the `main` branch.
- Tests on Node.js versions 16, 18, and 20.
- Installs dependencies and runs tests with `npm test`.

## License
MIT
