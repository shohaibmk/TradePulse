import rateLimit from 'express-rate-limit'; // Import express-rate-limit

// Rate limiting configuration
const limiter = rateLimit({
    windowMs: 5* 60 * 1000, // 5 minutes
    max: 200, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
});

// Export the rate limiter middleware
export default limiter; 