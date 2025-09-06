import React, {createContext, useState} from "react";
import Children1 from "../Children1";
import {useAppSelector} from "@/redux";

export interface CountData {
  count: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const CountContext = createContext<CountData | null>(null);

export default function Children2() {
  const [text, setText] = useState("");
  const onion = useAppSelector((state) => state.plant.onion);
  return (
    <div>
      {/* Count context có thể cung cấp state value cho tất cả những thằng con bộc bên trong Provider */}
      {onion}
      <CountContext.Provider
        value={{
          count: 1,
          text,
          setText,
        }}
      >
        <Children1 />
      </CountContext.Provider>
      <h1>Children2</h1>
    </div>
  );
}
