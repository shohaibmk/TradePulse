// server.js
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import corsOptions from './middleware/corsOptions.js';// Import CORS options
import routes from './routes/index.js'; // Import routes
import limiter from './middleware/rateLimiter.js'; // Import rate limiter middleware

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000; 

// Show a warning if using the default port
if (PORT === 3000) {
    console.warn('Warning: Using default port 3000. Consider setting a different PORT in your .env file.');
}

// Middleware setup
const setupMiddleware = () => {
    app.use(helmet()); // Use helmet for security
    app.use(corsOptions); // Add cors middleware with options
    app.use(express.json()); // Middleware to parse JSON bodies
    app.use(limiter); // Apply rate limiting middleware
};

// Route setup
const setupRoutes = () => {
    app.use('/', routes); // Use the routes
};

// Start the server
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

// Initialize the application
const init = () => {
    setupMiddleware();
    setupRoutes();
    startServer();
};

// Run the application
init();