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
  const { prompt, user, tweet } = await request.json();

  const customPrompt = `${user} tweeted ${tweet}.\n\n${prompt}`;

  try {
    // @ts-ignore
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const tweetReply = await run(genAI, customPrompt);
    console.log(`final reply: ${tweetReply}`);

    return NextResponse.json(tweetReply);
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
