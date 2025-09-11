"use client";
import React from "react";
import {Button, ButtonProps} from "@heroui/react";
import {cva} from "class-variance-authority";

//cn và cva
export const buttonKinds = cva(
  "px-4 py-2 rounded font-bold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
  {
    variants: {
      kind: {
        primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400",
        rainbow:
          "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white hover:from-red-600 hover:via-yellow-600 hover:to-green-600 focus:ring-blue-400",
      },
    },
    defaultVariants: {
      kind: "primary",
    },
  }
);

export interface AppButtonProps extends ButtonProps {
  kind?: "primary" | "rainbow";
}

export function AppButton(props: AppButtonProps) {
  return <Button className={buttonKinds({ kind: props.kind })} {...props} />;
}
