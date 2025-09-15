import {useContext} from "react";
import {SwrContext} from "./SwrProvider";
import axios from "axios";
import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";

export const useFetchPikachuSwrCore = () => {
  const swr = useSWR("https://pokeapi.co/api/v2/pokemon/pikachu", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return swr;
};

export const useFetchPikachuSwrSingleton = () => {
  const {useFetchPikachuSwr} = useContext(SwrContext)!;
  return useFetchPikachuSwr;
};
