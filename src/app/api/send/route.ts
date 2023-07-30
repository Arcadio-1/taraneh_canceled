import { NextRequest, NextResponse } from "next/server";
import { getClient } from "../util/getClient";

export async function Post(request: NextRequest, response: NextResponse) {
  try {
    console.log("fuck me");
    const body = request.body;
    const client = await getClient("test");
    const db = client.db();
    const req = await db.collection("users").insertOne({ body });
    NextResponse.json({ status: 200, res: req });
  } catch {
    NextResponse.json({ status: 504, res: null });
  }
}
