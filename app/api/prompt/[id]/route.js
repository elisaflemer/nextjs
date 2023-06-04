import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, {params}) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator')

        if(!prompt) return new Response("Prompt not found", { status: 404 })

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        console.log("Error getting prompt: ", error.message);
        return new Response("Failed to get prompt", { status: 500 });
    }
}

export const PUT = async (request, {params}) => {

    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator')

        if(!prompt) return new Response("Prompt not found", { status: 404 })

        const { prompt: promptText, tag } = await request.json();

        prompt.prompt = promptText;
        prompt.tag = tag;

        await prompt.save();

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        console.log("Error getting prompt: ", error.message);
        return new Response("Failed to get prompt", { status: 500 });
    }
}

export const DELETE = async (request, {params}) => {
    
        try {
            await connectToDB();
    
            await Prompt.findByIdAndRemove(params.id);
    
            return new Response(JSON.stringify(prompt), { status: 204 })
    
        } catch (error) {
            console.log("Error getting prompt: ", error.message);
            return new Response("Failed to get prompt", { status: 500 });
        }
    }