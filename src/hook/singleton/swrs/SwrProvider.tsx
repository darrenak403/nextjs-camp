import React from "react";
import {PropsWithChildren, createContext} from "react";
import {useDisclosure} from "@heroui/react";
import {useFetchPikachuSwrCore} from "./useFetchPikachuSwr";

export interface SwrContextType {
  useFetchPikachuSwr: ReturnType<typeof useFetchPikachuSwrCore>;
}

export const SwrContext = createContext<SwrContextType | null>(null);

export const SwrProvider = ({children}: PropsWithChildren) => {
  const useFetchPikachuSwr = useFetchPikachuSwrCore();
  return (
    <>
      <SwrContext.Provider
        value={{
          useFetchPikachuSwr,
        }}
      >
        {children}
      </SwrContext.Provider>
    </>
  );
};
