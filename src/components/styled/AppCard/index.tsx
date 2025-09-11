"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  HTMLHeroUIProps,
} from "@heroui/react";

export const AppCard = (props: CardProps) => {
  return <Card {...props} />;
};

export const AppCardHeader = (props: HTMLHeroUIProps<"div">) => {
  return <CardHeader {...props} />;
};

export const AppCardBody = (props: HTMLHeroUIProps<"div">) => {
  return <CardBody {...props} />;
};

export const AppCardFooter = (props: HTMLHeroUIProps<"div">) => {
  return <CardFooter {...props} />;
};
