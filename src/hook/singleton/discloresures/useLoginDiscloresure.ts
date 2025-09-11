import {useDisclosure} from "@heroui/react";
import {useContext} from "react";
import {DiscloresuresContext} from "./DiscloresuresProvider";

// logic chính của  hook
export const useLoginDiscloresureCore = () => {
  return useDisclosure();
};

// đây là hooks
// bản chất là cái hook này nó trỏ về 1 hook trong context mà thôi
// dù em có xài hook này ở bất kì component nào nó đều trả về 1 thứ - singleton
export const useLoginDiscloresureSingleton = () => {
  const {useLoginDisclosure} = useContext(DiscloresuresContext)!;
  // trả về cái hook trong context
  return useLoginDisclosure;
};
