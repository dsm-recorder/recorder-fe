import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IOrganization, IProjectRequest, IRepoArrayResponse } from './type';

const ROUTER = 'projects';

export const GetIndividualRepo = () => {
  const response = async () => {
    return (await instance.get<IRepoArrayResponse>(`${ROUTER}/repository`)).data
      .repos;
  };

  return useQuery(['repo'], response, {});
};

export const PostProject = () => {
  const response = async (param: IProjectRequest) => {
    return instance.post(`${ROUTER}`, {
      ...param,
    });
  };

  return useMutation(response, {
    onSuccess: () => {
      alert('등록 성공');
    },
    onError: (e) => {
      alert(e);
    },
  });
};

export const GetOrganization = () => {
  const response = async () => {
    return (await instance.get<IOrganization>(`${ROUTER}/organization`)).data
      .organizations;
  };

  return useQuery(['organziation'], response);
};

export const GetOrganizationRepo = (organization: string) => {
  const response = async () => {
    return (
      await instance.get<IRepoArrayResponse>(
        `${ROUTER}/organization/repository?organization=${organization}`
      )
    ).data.repos;
  };

  return useQuery(['organizationRepo', organization], response, {
    enabled: organization.length >= 1 && organization !== '개인 레포지토리',
  });
};
