import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import {
  IOrganization,
  IProjectRequest,
  IProjectShare,
  IRepoArrayResponse,
  ProjectType,
  SharedPrjoectType,
} from './type';

const ROUTER = 'projects';

export const GetIndividualRepo = () => {
  const response = async () => {
    const { data } = await instance.get<IRepoArrayResponse>(
      `${ROUTER}/repository`
    );
    return data;
  };

  return useQuery(['repo'], response);
};

export const PostProject = () => {
  const response = async (param: IProjectRequest) => {
    return await instance.post(ROUTER, param);
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
    return data;
  };

  return useQuery(['organization'], response);
};

export const GetOrganizationRepo = (organization: string) => {
  const response = async () => {
    const { data } = await instance.get<IRepoArrayResponse>(
      `${ROUTER}/organization/repository?organization=${organization}`
    );

    return data;
  };

  return useQuery(['organizationRepo', organization], response, {
    enabled: organization.length >= 1 && organization !== '개인 레포지토리',
  });
};

export const GetMyProjectList = () => {
  const response = async () => {
    const { data } = await instance.get<{ projects: ProjectType[] }>(
      `${ROUTER}/my`
    );

    return data;
  };
  return useQuery(['myProject'], response);
};

export const PatchShareProject = (id: string) => {
  const response = async (param: IProjectShare) => {
    const { data } = await instance.patch(`${ROUTER}/${id}/publish`, param);
    return data;
  };

  return useMutation(response, {
    onSuccess: () => {
      alert('공유되었습니다.');
    },
    onError: (e) => {
      alert(e);
    },
  });
};

export const GetSharedProjectDetail = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<SharedPrjoectType>(
      `${ROUTER}/published/${id}`
    );
    return data;
  };

  return useQuery(['SharedProjectDetail'], response);
};
