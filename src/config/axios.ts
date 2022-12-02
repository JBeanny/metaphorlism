import axios, { AxiosRequestConfig } from "axios";

const fetchData = async ({
  baseURL = import.meta.env.VITE_BACKEND_URL,
  url = "/",
  method = "get",
  headers,
  data = {},
}: AxiosRequestConfig) => {
  return await axios({
    baseURL,
    url,
    method,
    headers,
    data,
  });
};

interface image {
  name: string;
  url: string;
}

export interface IPackage {
  name: string;
  image: image;
  description: string;
  serviceList: Array<string>;
  duration: number;
  price: number;
}

export interface IService {
  id: string;
  image: image;
  name: string;
  description: string;
  package: Array<IPackage>;
}

export async function getServices(): Promise<Array<IService>> {
  try {
    const result = await fetchData({ url: "/service" });
    return result.data;
  } catch (err) {
    throw new Error("Error");
  }
}
