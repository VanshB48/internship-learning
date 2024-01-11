import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get(async (req, res) => {
    try {
        const response = await openai.Completions.create({
            engine: 'text-davinci-003', // Replace with the desired engine
            prompt: 'Your prompt goes here',
            max_tokens: 100,
        });

        res.json(response.data);
    } catch (error) {
        console.error(`Error from OpenAI: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
