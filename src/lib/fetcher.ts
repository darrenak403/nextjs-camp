import axios, {AxiosRequestConfig} from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// =================== FETCHERS FOR useSWR (GET) ===================
export const fetcher = async (url: string) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export const fetcherWithConfig = async ([url, config]: [
  string,
  AxiosRequestConfig?
]) => {
  const response = await axiosInstance({url, ...config});
  return response.data;
};

// =================== FETCHERS FOR useSWRMutation ===================

// POST mutation fetcher
export const postMutationFetcher = async (url: string, {arg}: {arg: any}) => {
  const response = await axiosInstance.post(url, arg);
  return response.data;
};

// PUT mutation fetcher
export const putMutationFetcher = async (url: string, {arg}: {arg: any}) => {
  const response = await axiosInstance.put(url, arg);
  return response.data;
};

// PATCH mutation fetcher
export const patchMutationFetcher = async (url: string, {arg}: {arg: any}) => {
  const response = await axiosInstance.patch(url, arg);
  return response.data;
};

// DELETE mutation fetcher
export const deleteMutationFetcher = async (
  url: string,
  {arg}: {arg?: any} = {arg: undefined}
) => {
  const response = await axiosInstance.delete(url, arg ? {data: arg} : {});
  return response.data;
};

// Form data mutation fetcher
export const formDataMutationFetcher = async (
  url: string,
  {arg}: {arg: FormData}
) => {
  const response = await axiosInstance.post(url, arg, {
    headers: {"Content-Type": "multipart/form-data"},
  });
  return response.data;
};

// Generic mutation fetcher
export const genericMutationFetcher = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      method?: "POST" | "PUT" | "PATCH" | "DELETE";
      data?: any;
      config?: AxiosRequestConfig;
    };
  }
) => {
  const {method = "POST", data, config = {}} = arg;
  const response = await axiosInstance({
    url,
    method,
    data,
    ...config,
  });
  return response.data;
};

export default axiosInstance;
