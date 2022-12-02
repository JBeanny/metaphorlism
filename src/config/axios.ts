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

interface Image {
  name: string;
  url: string;
}

interface ContactInfo {
  platform: {
    name: string;
    image: string;
  };
  url: string;
}

export interface IPackage {
  name: string;
  image: Image;
  description: string;
  serviceList: Array<string>;
  duration: number;
  price: number;
}

export interface IService {
  id: string;
  image: Image;
  name: string;
  description: string;
  package: Array<IPackage>;
}

export interface IContact {
  name: string;
  image: string;
  contact: Array<ContactInfo>;
}

export async function getServices(): Promise<Array<IService>> {
  try {
    const result = await fetchData({ url: "/service" });
    return result.data;
  } catch (err) {
    throw new Error("Error");
  }
}

interface getContactReponse {
  team: IContact;
  member: Array<IContact>;
}

export async function getContact(): Promise<getContactReponse> {
  try {
    const result = Promise.all([
      fetchData({ url: "/metaphorlism" }),
      fetchData({ url: "/member" }),
    ]).then(([team, member]) => {
      return {
        team: team.data,
        member: member.data,
      };
    });
    return result;
  } catch (err) {
    throw new Error("Error");
  }
}
