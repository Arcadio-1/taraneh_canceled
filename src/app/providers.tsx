"use client";
import { store } from "@/lib/store";
import React from "react";
import { Provider as ReduxPovider } from "react-redux";
interface Props {
  children: React.ReactNode;
}
const Provider = (props: Props) => {
  return (
    <div>
      <ReduxPovider store={store}>{props.children}</ReduxPovider>
    </div>
  );
};

export default Provider;
