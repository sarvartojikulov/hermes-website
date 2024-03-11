import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(_request: NextRequest) {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media`, {
        params : {
          fields : "id,media_type,media_url,caption,permalink",
          access_token : process.env.INSTAGRAM_TOKEN
        }
      }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
