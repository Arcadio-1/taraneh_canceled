"use client";
import React, { useEffect, useState } from "react";
import styles from "./vest.module.scss";
import { data } from "autoprefixer";

const Test = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const getAdProducts = async () => {
      const request = await fetch("/api/products");
      const response = await request.json();
      const data = JSON.stringify(response);
      setData(data);
      console.log(response);
    };
    getAdProducts();
  }, []);

  return (
    <div className={styles.test}>
      Test
      <div className={styles.test_nested}>darko</div>
      {data}
    </div>
  );
};

export default Test;
