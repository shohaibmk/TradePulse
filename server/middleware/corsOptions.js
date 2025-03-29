// middleware/corsOptions.js
import cors from 'cors';


// CORS options to allow specific methods and headers
export const corsOptions = {
    origin: '*', // Allow all origins (for development only, specify your domain in production)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only these methods
    allowedHeaders: [
        'Content-Type', // Allow Content-Type header
        'Accept', // Allow Accept header
        'Authorization', // Allow Authorization header
    ],
};

export const noCors = (req, res, next) => {
    next(); // Proceed to the next middleware or route handler
};

// Export the CORS options
export default cors(corsOptions);