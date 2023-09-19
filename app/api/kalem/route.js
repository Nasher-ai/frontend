import { NextResponse } from "next/server";
import OpenAI from "openai";
// import { useChatCompletion, GPT35 } from 'openai-streaming-hooks';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export async function POST(request) {
  const body = await request.json();
  const { userPrompt, about, tone, targetedPlatforms } = body;

  if (!userPrompt || !about || !tone || !targetedPlatforms) {
    return new NextResponse("Invalid data", { status: 400 });
  }

  let res = [];

  console.log("targetedPlatforms ", targetedPlatforms);

  for (const platform of Object.keys(targetedPlatforms)) {
    if (!targetedPlatforms[platform]) continue;
    console.log("Getting ", platform);
    let systemMessage = `You are an Arabic Social media content Writer AI!
    As an expert in writing engaging social media contents according to this platform ${platform} and in this tone ${tone}, your task is to enhance a provided text from the user in Arabic. 
    If any English words are used, translate them to Arabic. Also you have to keep in mind what the user says about his audience or company ${about}.
    ( The output should be with no extra commentary)

    Instructions:
    1. Read and analyze the text carefully, ensuring it is in Arabic or ask for a translation if it's entirely in English.
    2. Correct any errors and remove emojis if present. `;

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemMessage,
          },
          { role: "user", content: userPrompt },
          { role: "user", content: about },
        ],
        model: "gpt-3.5-turbo",
      });
      // console.log('openai res: ', completion, '\n\n########################## \n \n')
      
      // const [messages, submitMessage] = useChatCompletion({
      //   messages: [
      //     {
      //       role: "system",
      //       content: systemMessage,
      //     },
      //     { role: "user", content: userPrompt },
      //     { role: "user", content: about },
      //   ],
      //   model: 'gpt-3.5-turbo',
      //   apiKey: process.env.OPEN_AI_KEY,
      // });

      // submitMessage();

      // const stream = await OpenAI("chat", {
      //   model: "gpt-3.5-turbo",
      //   messages: [
      //     {
      //       role: "system",
      //       content: "You are a helpful assistant that translates English to French.",
      //     },
      //     {
      //       role: "user",
      //       content: 'Translate the following English text to French: "Hello world!"',
      //     },
      //   ],
      // });


      // console.log('api done')
      // console.log('openai stream res: ', stream, '\n\n########################## \n \n')
      
      

      res.push({
        platform: platform,
        text: completion.choices[0].message.content,
      });
      console.log('resp.',res)
    } catch (e) {
      console.log("OPENAI", e);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }
  console.log("Done");
  return NextResponse.json(res);
}
