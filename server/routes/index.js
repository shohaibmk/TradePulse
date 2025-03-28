import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import schema from '../schema/schema.js';

const router = express.Router();

// Function to log request details
const logRequestDetails = (req) => {
    const timestamp = new Date().toISOString(); // Get the current timestamp
    const ipAddress = req.ip; // Get the client's IP address
    console.log(`GET /graphql at ${timestamp} from IP: ${ipAddress} for Query:${JSON.stringify(req.query)}`); // Log the timestamp and IP address
};

router.get('/', (req, res) => {
    const timestamp = new Date().toISOString(); // Get the current timestamp
    const ipAddress = req.ip; // Get the client's IP address

    console.log(`GET / at ${timestamp} from IP: ${ipAddress}`); // Log the timestamp and IP address

    res.send('Hello, World!');
});

router.get('/health', (req, res) => {
    const timestamp = new Date().toISOString(); // Get the current timestamp
    const ipAddress = req.ip; // Get the client's IP address

    console.log(`GET /health at ${timestamp} from IP: ${ipAddress}`); // Log the timestamp and IP address

    res.status(200).send('OK');
});

router.all(
    '/graphql',
    (req, res, next) => {
        logRequestDetails(req); // Log request details
        next(); // Proceed to the GraphQL handler
    },
    createHandler({
        schema: schema,
    }),
);

export default router;