import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, {params}) => {
    try {
        await connectToDB();
        console.log(params.id)
        const prompts = await Prompt.find({creator: params.id}).populate('creator')
        console.log(prompts)

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.log("Error getting prompt: ", error.message);
        return new Response("Failed to get prompt", { status: 500 });
    }
}