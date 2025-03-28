// routes/index.js
import express from 'express';

const router = express.Router();

// Sample route
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Export the router
export default router;