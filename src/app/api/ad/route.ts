// import { getAdProducts } from "./helper";
import { NextResponse } from "next/server";
import { getClient } from "../util/getClient";

export async function GET() {
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const request = await db
      .collection("allProducts")
      .find({ isAd: true })
      .toArray();

    client.close();

    const data = JSON.stringify(request);
    console.log(data);
    // if (!request) {
    //   throw new Error("خطا در دریافت لیست محصولات تبلیغاتی");
    // }

    // const response = JSON.parse(request);
    // if (!response || response.status === "error") {
    //   throw new Error(
    //     response.message || "خطا در دریافت لیست محصولات تبلیغاتی رخ داده است"
    //   );
    // }
    return NextResponse.json({
      status: 202,
      adProducts: data,
    });
  } catch {
    NextResponse.json({
      status: 504,
      adProducts: null,
    });
  }
}
