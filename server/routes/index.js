// routes/index.js
import express from 'express';

const router = express.Router();

// Sample route
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.get('/health', (req, res) => {
    const timestamp = new Date().toISOString(); // Get the current timestamp
    const ipAddress = req.ip; // Get the client's IP address

    console.log(`Health check at ${timestamp} from IP: ${ipAddress}`); // Log the timestamp and IP address

    res.status(200).send('OK');
});

// Export the router
export default router;