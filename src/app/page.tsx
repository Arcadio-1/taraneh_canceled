import Test from "./_components/Test";
import { getClient } from "./api/util/getClient";

async function getData() {
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
    if (!request) {
      throw new Error("خطا در دریافت لیست محصولات تبلیغاتی");
    }
    return JSON.stringify({
      status: "success",
      message: "لیست محصولات تبلیغاتی با موفقیت دریافت شد",
      adProducts: request,
    });
  } catch (error: any) {
    return JSON.stringify({
      status: "error",
      message: error.message || "بروز خطا در دریافت لیست محصولات تبلیغاتی",
      adProducts: null,
    });
  }
}

export default async function Home() {
  const request = await getData();
  const data = JSON.parse(request);

  // console.log(data);
  return (
    <main>
      <Test text={request} />
      {/* {request} */}
    </main>
  );
}
