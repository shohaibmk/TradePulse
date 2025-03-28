# Express Server

This is a simple Express server application that demonstrates the use of middleware, routing, and environment variables.

## Table of Contents

- [Express Server](#express-server)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Environment Variables](#environment-variables)
  - [Middleware](#middleware)
  - [Routes](#routes)
  - [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install `nodemon` as a development dependency (optional but recommended for development):

   ```bash
   npm install --save-dev nodemon
   ```

## Usage

1. Create a `.env` file in the root of your project and set the following environment variable:

   ```plaintext
   PORT=4000
   ```

   You can change `4000` to any port number you prefer. If you do not set this variable, the server will default to port `3000`.

2. Start the server in development mode using `nodemon`:

   ```bash
   npm run dev
   ```

   Or start the server normally:

   ```bash
   npm start
   ```

3. Access the server at `http://localhost:<PORT>` (replace `<PORT>` with the port number you set).

## Environment Variables

The following environment variables can be configured in the `.env` file:

- `PORT`: The port on which the server will run. Default is `3000` if not set.

## Middleware

The server uses the following middleware:

- **Helmet**: For security by setting various HTTP headers.
- **CORS**: To handle Cross-Origin Resource Sharing, allowing only specific HTTP methods (GET, POST, PUT, DELETE).
- **Express.json()**: To parse incoming JSON requests.

## Routes

The server currently has the following route:

- `GET /`: Returns a simple "Hello, World!" message.
- `GET /health`: Returns OK if server is running.


## License

This project is licensed under the MIT License.