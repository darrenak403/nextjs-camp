import React from "react";
import {PropsWithChildren, createContext} from "react";
import {useDisclosure} from "@heroui/react";
import {useFetchPikachuSwrCore} from "./useFetchPikachuSwr";
import {useFetchAegislashSwrCore} from "./useFetchAegislashSwr";

export interface SwrContextType {
  useFetchPikachuSwr: ReturnType<typeof useFetchPikachuSwrCore>;
  useFetchAegislashSwr: ReturnType<typeof useFetchAegislashSwrCore>;
}

export const SwrContext = createContext<SwrContextType | null>(null);

export const SwrProvider = ({children}: PropsWithChildren) => {
  const useFetchPikachuSwr = useFetchPikachuSwrCore();
  const useFetchAegislashSwr = useFetchAegislashSwrCore();
  return (
    <>
      <SwrContext.Provider
        value={{
          useFetchPikachuSwr,
          useFetchAegislashSwr,
        }}
      >
        {children}
      </SwrContext.Provider>
    </>
  );
};
