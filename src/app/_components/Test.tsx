"use client";
import React, { useEffect, useState } from "react";
import styles from "./vest.module.scss";
import axios from "axios";
import { darkOn } from "@/lib/features/ui/uiSlice";
import {
  useAppDispatch,
  useAppSelector,
  useGetProductsQuery,
} from "@/lib/hooks/hook";
interface Props {
  text: string;
}

const Test = (props: Props) => {
  const [dataa, setData] = useState<any>();
  const dispatchTheme = useAppDispatch();
  const { isDark } = useAppSelector((state) => state.ui);

  const { isError, isFetching, isLoading, data } = useGetProductsQuery(
    undefined,
    { pollingInterval: 500000 }
  );

  // useEffect(() => {
  //   dispatchTheme(darkOn);
  // }, [dispatchTheme]);

  useEffect(() => {
    console.log(isDark);
  }, [isDark]);

  const themeToggle = (): void => {
    dispatchTheme(darkOn());
  };

  useEffect(() => {
    const getAdProducts = async () => {
      const request = await fetch("/api/products");
      const response = await request.json();
      const data = JSON.stringify(response);
      setData(data);
      console.log(response);
    };
    const getAdProductsAxios = async () => {
      //   const request = await fetch("/api/products");
      const request = await axios.get("/api/products");
      //   const response = await request.json();
      // const data = JSON.stringify(response);
      setData(request);
      console.log(request);
    };
    // getAdProducts();
    // getAdProductsAxios();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className={styles.test}>
      <span onClick={themeToggle}>Test</span>
      <div className={styles.test_nested}>darko</div>
      {props.text}
    </div>
  );
};

export default Test;
