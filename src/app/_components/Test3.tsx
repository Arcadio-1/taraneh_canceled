"use client";
import { useAppSelector } from "@/lib/hooks/hook";
import React, { useEffect } from "react";

interface Props {
  data: any;
}

const Test3 = (props: Props) => {
  const { products } = useAppSelector((state) => state.data);

  useEffect(() => {
    console.log(products);
    console.log(props.data);
  }, [products, props.data]);
  return <div>Test3</div>;
};

export default Test3;
