import { NextResponse } from "next/server";
import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPEN_AI_KEY,
// });

export async function POST(request) {
  const body = await request.json();
  console.log("Body", body)
  const { userPromt, about, tone, targetedPlatforms } = body;

  if (!userPromt || !about || !tone || !targetedPlatforms) {
    return new NextResponse("Invalid data", { status: 400 });
  }
  //TODO Add validation
  let systemMessage = ""
  let res = [];
  for (const platform of targetedPlatforms) {
    switch (platform) {
      case "instagram":
        systemMessage = ""
        break;
        case "linkedin":
        systemMessage = ""
        break;
        case "facebook":
        systemMessage = ""
        break;
        case "twitter":
        systemMessage = ""
        break;
        case "tiktok":
        systemMessage = ""
        break;
      default:
        break;
    }

    try {
      // const completion = await openai.chat.completions.create({
      //   messages: [
      //     {
      //       role: "system",
      //       content: systemMessage,
      //     },
      //     { role: "user", content: userPromt },
      //   ],
      //   model: "gpt-3.5-turbo",
      // });
      // res.push(audience: audience, response: (completion.choices[0].message));
      res.push({
        audience: audience,
        response: "Target = " + audience
      })
    } catch (e) {
      console.log("OPENAI", e);
      return new NextResponse("Internal Error", { status: 500 , message: e});
    }
  }
  return NextResponse.json(res);
}