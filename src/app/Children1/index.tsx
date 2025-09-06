import React, {useContext} from "react";
import {CountContext} from "../Children2";
import {Spacer} from "@heroui/react";
import Children3 from "./Children3";
import Children4 from "./Children4";

export default function Children1() {
  const {count, text} = useContext(CountContext)!;
  return (
    <div>
      Children1
      <div>{count}</div>
      <div>{text}</div>
      <Spacer y={2} />
      <Children3 />
      <Children4 />
    </div>
  );
}
