import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get("id");

  try {
    const responseData = await fetch(`https://api.github.com/users/${param}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.ACCESS_TOKEN}`,
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
