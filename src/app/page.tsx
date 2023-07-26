// "use client";
import { store } from "@/lib/store";
// import Test from "./_components/Test";
import { getClient } from "./api/util/getClient";
// import { setData } from "@/lib/features/data/dataSlice";
import { cartApi } from "@/lib/features/services/apiSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useGetProductsQuery } from "@/lib/hooks/hook";
import { setData } from "@/lib/features/data/dataSlice";
import Test2 from "./_components/Test2";

async function getData() {
  // store.dispatch(cartApi.endpoints.getProducts.initiate(undefined));
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const request: any = await db
      .collection("allProducts")
      .find({ isAd: true })
      .toArray();
    client.close();
    if (!request) {
      throw new Error("خطا در دریافت لیست محصولات تبلیغاتی");
    }
    // console.log(request);
    store.dispatch(setData(request));

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
  // store.dispatch(cartApi.endpoints.getProducts.initiate(undefined));
  // const {} = useSelector(cartAp)
  // const { isError, isFetching, isLoading, data } = useGetProductsQuery(
  //   undefined,
  //   { pollingInterval: 500000 }
  // );
  const data = store.getState().data.products;
  // console.log(data);
  // useEffect(() => {
  //   console.log();
  // }, []);
  const request: any = await getData();
  // await getData();
  // const data = JSON.parse(request);
  console.log("request");
  // if (data && data.status === "success") {
  //   console.log
  // store.dispatch(setData(data.adProducts));
  // }
  return (
    <main>
      <h1>main page</h1>
      {/* <Test text={request} /> */}
      <Test2 data={data} />
      {/* {request} */}
    </main>
  );
}
