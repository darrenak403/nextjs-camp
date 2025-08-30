"use client";
import {Button, ButtonProps} from "@heroui/react";

export function MyButton(props: ButtonProps) {
  return <Button className="font-bold" {...props} />;
}
