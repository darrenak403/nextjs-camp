import {useDisclosure} from "@heroui/react";
import {useContext} from "react";
import {DiscloresuresContext} from "./DiscloresuresProvider";

export const useLoginDiscloresureCore = () => {
  return useDisclosure();
};

export const useLoginDiscloresureSingleton = () => {
  const {useLoginDisclosure} = useContext(DiscloresuresContext)!;
  return useLoginDisclosure;
};
