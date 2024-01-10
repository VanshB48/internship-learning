import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests with a limit of 50mb
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hello');
});

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        const PORT = process.env.PORT || 8080; // Use the port specified in the environment variable or default to 8080
        app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`));
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process if there is an error connecting to the database
    }
};

startServer();
