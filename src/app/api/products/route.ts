import { getAdProducts } from "./helper";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const request = await getAdProducts();
    const response = JSON.parse(request);

    // const data = response.adProducts;
    // const data2 = data.json();
    console.log(request);
    // if (!response || response.status === "error") {
    //   throw new Error(
    //     response.message || "خطا در دریافت لیست محصولات تبلیغاتی رخ داده است"
    //   );
    // }
    return NextResponse.json({
      status: 202,
      data: response,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      data: null,
    });
  }
}

// export default handler;
