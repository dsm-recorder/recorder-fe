export interface IRepoResponse {
  name: string;
  description?: string;
  language?: string;
}

export interface IRepoArrayResponse {
  repos: IRepoResponse[];
}

export interface IProjectRequest {
  logoImageUrl: string;
  projectName: string;
  repositoryName: string;
  description: string;
  skills: string[];
}

export interface IOrganization {
  organizations: string[];
}

export interface IProject {
  id: string;
  name: string;
  logoImageUrl: string;
  isPublished: 0 | 1;
  createdAt: string;
  finishDate: string | null;
  description: string
}

export interface IProjectShare {
  role: string;
  learned: string;
  prRecordIds: string[];
}

export interface ISharedProject {
  name: string;
  logoImageUrl: string;
  startDate: string;
  finishDate: string;
  likeCount: number
  skills: string[]
  about:string
  role:string
  learned:string
  isLiked:boolean
}
