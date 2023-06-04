import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts), { status: 200, headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
          }, })
    } catch (error) {
        console.log("Error getting prompt: ", error.message);
        return new Response("Failed to get prompt", { status: 500 });
    }
}