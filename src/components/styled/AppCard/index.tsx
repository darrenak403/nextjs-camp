"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  cn,
  HTMLHeroUIProps,
} from "@heroui/react";

export interface AppCardProps extends CardProps {
  flag?: boolean;
}

export const AppCard = (props: AppCardProps) => {
  return (
    <Card
      {...props}
      className={cn(
        {
          "bg-amber-100": props.flag,
          "bg-white": !props.flag,
        },
        {
          "text-2xl": props.flag,
          "text-base": !props.flag,
        }
      )}
    />
  );
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
