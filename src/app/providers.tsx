import React from "react";

interface Props {
  children: React.ReactNode;
}
const Provider = (props: Props) => {
  return <div>{props.children}</div>;
};

export default Provider;
