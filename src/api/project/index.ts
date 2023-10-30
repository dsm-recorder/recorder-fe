import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { IProjectRequest, IRepoResponse } from "./type";

const ROUTER = "projects";

export const GetRepository = () => {
  const response = async () => {
    return (await instance.get<IRepoResponse[]>(`${ROUTER}/repository`)).data;
  };

  return useQuery({ queryKey: ["repo"], queryFn: response });
};

export const PostProject = () => {
  const response = async (param: IProjectRequest) => {
    return instance.post(`${ROUTER}`, {
      ...param,
    });
  };

  return useMutation(response, {
    onSuccess: () => {
      alert("등록 성공");
    },
    onError: (e) => {
      alert(e);
    },
  });
};
