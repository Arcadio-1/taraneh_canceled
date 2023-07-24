"use client";
import React, { useEffect, useState } from "react";
import styles from "./vest.module.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { darkOn } from "@/lib/features/ui/uiSlice";
interface Props {
  text: string;
}
const Test = (props: Props) => {
  const [data, setData] = useState<any>();
  const dispatchTheme = useDispatch<AppDispatch>();
  const isDark = useSelector<RootState>((state) => state.ui.isDark);

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

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className={styles.test}>
      <span onClick={themeToggle}>Test</span>
      <div className={styles.test_nested}>darko</div>
      {props.text}
    </div>
  );
};

export default Test;
