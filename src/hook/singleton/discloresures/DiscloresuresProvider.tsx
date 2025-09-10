import React from "react";
import {PropsWithChildren, createContext} from "react";
import {useDisclosure} from "@heroui/react";
import {useSignUpDiscloresureCore} from "./useSignUpDiscloresure";
import {useLoginDiscloresureCore} from "./useLoginDiscloresure";

export interface DiscloresuresContextType {
  useSignUpDisclosure: ReturnType<typeof useSignUpDiscloresureCore>;
  useLoginDisclosure: ReturnType<typeof useLoginDiscloresureCore>;
}

export const DiscloresuresContext =
  createContext<DiscloresuresContextType | null>(null);

export const DiscloresuresProvider = ({children}: PropsWithChildren) => {
  const useSignUpDisclosure = useSignUpDiscloresureCore();
  const useLoginDisclosure = useLoginDiscloresureCore();
  return (
    <>
      <DiscloresuresContext.Provider
        value={{
          useSignUpDisclosure,
          useLoginDisclosure,
        }}
      >
        {children}
      </DiscloresuresContext.Provider>
    </>
  );
};
