"use client";
import React from "react";
import {Button, ButtonProps} from "@heroui/react";
import {cva} from "class-variance-authority";

//cn và cva với theme support
export const buttonKinds = cva(
  "px-4 py-2 rounded font-bold transition-all duration-300 focus:outline-none focus:ring-2",
  {
    variants: {
      kind: {
        primary: [
          // Light theme
          "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400",
          // Dark theme
          "dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-gray-100 dark:focus:ring-blue-500",
        ],
        rainbow: [
          // Light theme
          "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white",
          "hover:from-red-600 hover:via-yellow-600 hover:to-green-600 focus:ring-blue-400",
          // Dark theme
          "dark:from-red-600 dark:via-yellow-600 dark:to-green-600",
          "dark:hover:from-red-700 dark:hover:via-yellow-700 dark:hover:to-green-700",
          "dark:focus:ring-blue-500",
        ],
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
  return <Button className={buttonKinds({kind: props.kind})} {...props} />;
}
