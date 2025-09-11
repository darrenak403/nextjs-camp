import axios from "axios";
import {useContext} from "react";
import useSWR from "swr";
import {SwrContext} from "./SwrProvider";

export const useFetchAegislashSwrCore = () => {
  const swr = useSWR("AEGISLASH", () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/aegislash");
  });
  return swr;
};

export const useFetchAegislashSwrSingleton = () => {
  const {useFetchAegislashSwr} = useContext(SwrContext)!; // Thêm destructuring
  return useFetchAegislashSwr;
};
