import { OpenAI } from "openai";

export const configureOpenAI = () => {
    const openaiInstance = new OpenAI({
        apiKey: process.env.OPEN_AI_SECRET_KEY,
        organization: process.env.OPEN_AI_ORG
    });
    return openaiInstance;
}
