import Prompt from "/models/prompt";
import { connectToDB } from "/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) return new Response("Prompt Not Found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response("Prompt Updated Successfully", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  try {
    console.log("Deleting prompt with id:", params.id);

    await connectToDB();

    // Use findByIdAndDelete instead of findByIdAndRemove (recommended)
    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt Deleted Successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting prompt:", error);
    return new Response("Failed to Delete Prompt", { status: 500 });
  }
};


