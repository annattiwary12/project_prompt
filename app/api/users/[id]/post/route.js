import Prompt from "/models/prompt";
import { connectToDB } from "/utils/database";

export async function GET(request, { params }) {
  // Wait for params if they are a promise
  const awaitedParams = await params;

  await connectToDB();

  const prompts = await Prompt.find({ creator: awaitedParams.id }).populate("creator");

  return new Response(JSON.stringify(prompts), { status: 200 });
}

