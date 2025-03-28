// middleware/corsOptions.js
import cors from 'cors';


// CORS options to allow only specific methods
const corsOptions = {
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only these methods
};

// Export the CORS options
export default cors(corsOptions);