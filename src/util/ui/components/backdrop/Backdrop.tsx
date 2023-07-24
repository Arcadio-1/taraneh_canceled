"use client";
import React from "react";
import styles from "./backdrop.module.scss";
export const Backdrop = () => {
  const closeBackdropHandler = () => {};

  return (
    <div onClick={closeBackdropHandler} className={styles.backdrop}>
      backdrop
    </div>
  );
};
