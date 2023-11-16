export interface IRepoResponse {
  name: string;
  description?: string;
  language?: string;
};

export interface IRepoArrayResponse {
  repos: IRepoResponse[]
};

export interface IProjectRequest {
  logoImageUrl: string
  projectName: string;
  repositoryName: string;
  description: string;
  skills: string[];
};

export interface IOrganization {
  organizations: string[]
};

export interface ProjectType {
  id: string;
  logoImageUrl: string;
  name: string;
  createdAt: string;
  description: string;
  isPublished: number;
  finishDate: string | null;
};

export interface IProjectShare {
  role: string
  learned: string
  prRecordIds: string[]
}