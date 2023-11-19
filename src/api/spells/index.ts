import { useMutation } from "@tanstack/react-query"
import { instance } from "../axios"
import { IErrorInfoList } from "./type"

const ROUTER = 'spells'

export const GetspellCheck = () => {
  const response = async (content: string) => {
    const { data } = await instance.get<IErrorInfoList>(
      `${ROUTER}?content=${content}`
    );
    return data;
  };

  return useMutation(["SpellCheck"], response);
};