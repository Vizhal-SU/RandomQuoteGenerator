# Random Quote Generator API with Express.js
This project is a basic example of how to create a simple web server using Express.js to generate random quotes using the "node-quotegen" module.

## Prerequisites
- Node.js installed on your machine

## Getting Started

1. Clone this repository or create a new directory for your project.
2. Navigate to your project directory in your terminal.
3. Install the required dependencies by running the following command:
   ```
   npm i
   ```
   This will install the necessary `node_modules` folder with the required packages.

4. Start the server by running:
   ```
   node app.js
   ```

5. The server will now be running on `http://localhost:3000`. You can access random quotes by visiting [http://localhost:3000/api/quote](http://localhost:3000/api/quote) in your web browser.

## API Endpoints

### Random Quote

- **Endpoint**: `/api/quote`
- **Method**: GET
- **Description**: Returns a random quote.

### Usage
To retrieve a random quote, make a GET request to [http://localhost:3000/api/quote](http://localhost:3000/api/quote) in your web browser.

## Dependencies
- [Express.js](https://expressjs.com/): The web framework used to create the server.
- [node-quotegen](https://www.npmjs.com/package/node-quotegen): The module used for generating random quotes.

## Author
Vizhal SU
