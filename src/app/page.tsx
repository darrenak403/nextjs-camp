"use client";
import {MyButton} from "@/components/styled/MyButton";
import {setCarrot, useAppDispatch, useAppSelector} from "@/redux";
import {Button, Calendar, InputOtp} from "@heroui/react";

export default function Home() {
  const carrot = useAppSelector((state) => state.plant.carrot);
  const potato = useAppSelector((state) => state.plant.potato);
  const dispatch = useAppDispatch();
  return (
    <div>
      {carrot}
      <Button onPress={() => dispatch(() => dispatch(setCarrot(carrot + 1)))}>
        Grow Carrot
      </Button>
      <Calendar />
      <InputOtp value="" onChange={() => {}} />
      <MyButton>Data</MyButton>
    </div>
  );
}
