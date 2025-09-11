import {useContext} from "react";
import {SwrContext} from "./SwrProvider";
import axios from "axios";
import useSWR from "swr";

export const useFetchPikachuSwrCore = () => {
  const swr = useSWR("PIKACHU", () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  });
  return swr;
};

export const useFetchPikachuSwrSingleton = () => {
  const {useFetchPikachuSwr} = useContext(SwrContext)!;
  return useFetchPikachuSwr;
};
