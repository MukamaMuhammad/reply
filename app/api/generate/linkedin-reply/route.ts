import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// @ts-ignore
async function run(genAI, customPrompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(customPrompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

export async function POST(request: Request) {
  const { post, user } = await request.json();

  const customPrompt = `${user} posted on LinkedIn ${post}.\n\n graft a human-like, short and concise reply to this post. It can be humorous, add value, controvesial, agree, disagree, seek clarification, add to conversation, funny, Starting a Debate or discussion response according to the context of the LinkedIn post. exclude hashtags.`;

  try {
    // @ts-ignore
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const linkedinReply = await run(genAI, customPrompt);
    console.log(`final reply: ${linkedinReply}`);

    return NextResponse.json(linkedinReply);
  } catch (err) {
    console.log({ err });
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  }
}

export const OPTIONS = async (request: Request) => {
  return new NextResponse("", {
    status: 200,
  });
};
