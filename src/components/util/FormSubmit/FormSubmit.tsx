"use client";
// import { CircularProgress } from "material-ui";

import React, { ComponentProps, useEffect } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmit = ({ children, className, ...props }: Props) => {
  const { pending } = useFormStatus();

  useEffect(() => {
    console.log(pending);
  }, [pending]);

  return (
    <button
      {...props}
      disabled={pending}
      type="submit"
      className={`btn-primary flex gap-1 bg-green-500 bg-opacity-70 text-gray-100 px-3 py-[0.1rem] rounded-[5px] ${className}`}
    >
      {children}
      {pending && <span className="loading loading-dots"></span>}
    </button>
  );
};

export default FormSubmit;
