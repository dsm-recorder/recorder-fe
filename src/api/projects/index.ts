import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IOrganization, IProjectRequest, IRepoArrayResponse } from './type';

const ROUTER = 'projects';

export const GetIndividualRepo = () => {
  const response = async () => {
    const { data } = await instance.get<IRepoArrayResponse>(
      `${ROUTER}/repository`
    );
    return data.repos;
  };

  return useQuery(['repo'], response, {});
};

export const PostProject = () => {
  const response = async (param: IProjectRequest) => {
    return await instance.post(`${ROUTER}`, { param });
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
    const { data } = await instance.get<IOrganization>(
      `${ROUTER}/organization`
    );
    return data.organizations;
  };

  return useQuery(['organization'], response);
};

export const GetOrganizationRepo = (organization: string) => {
  const response = async () => {
    if (organization.length < 1 || organization === '개인 레포지토리') {
      // 조건에 따라 API 요청을 스킵할 수 있습니다.
      return [];
    }

    const { data } = await instance.get<IRepoArrayResponse>(
      `${ROUTER}/organization/repository?organization=${organization}`
    );

    return data.repos;
  };

  return useQuery(['organizationRepo', organization], response, {
    enabled: organization.length >= 1 && organization !== '개인 레포지토리',
  });
};