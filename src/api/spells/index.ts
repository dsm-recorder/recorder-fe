import { useQuery } from "@tanstack/react-query"
import { instance } from "../axios"
import { IErrorInfoList } from "./type"

const ROUTER = 'spells'

export const GetspellCheck = (content: string, isClick: boolean) => {
  const response = async () => {
    const { data } = await instance.get<IErrorInfoList>(
      `${ROUTER}?content=${content}`
    );
    return data;
  };

  return useQuery(["SpellCheck"], response, {
    enabled: isClick  
  });
};