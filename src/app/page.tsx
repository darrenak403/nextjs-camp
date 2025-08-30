"use client";
import {MyButton} from "@/components/styled/MyButton";
import {Calendar, InputOtp} from "@heroui/react";

export default function Home() {
  return (
    <div>
      <Calendar />
      <InputOtp />
      <MyButton>Data</MyButton>
    </div>
  );
}
