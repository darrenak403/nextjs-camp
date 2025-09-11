"use client";
import React from "react";
import {Button, ButtonProps} from "@heroui/react";

export function AppButton(props: ButtonProps) {
  return <Button className="font-bold" {...props} />;
}
