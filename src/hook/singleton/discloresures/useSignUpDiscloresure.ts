import {useDisclosure} from "@heroui/react";
import {DiscloresuresContext} from "./DiscloresuresProvider";
import {useContext} from "react";

export const useSignUpDiscloresureCore = () => {
  return useDisclosure();
};

export const useSignUpDiscloresureSingleton = () => {
  const {useSignUpDisclosure} = useContext(DiscloresuresContext)!;
  return useSignUpDisclosure;
};
