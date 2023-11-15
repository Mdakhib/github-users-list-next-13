import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const responseData = await fetch(`https://api.github.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer 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`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const response = await responseData.json();
    return NextResponse.json({ data: response });
  } catch (err: any) {
    console.log("err", err);
    return NextResponse.json({ message: err, success: false });
  }
}
