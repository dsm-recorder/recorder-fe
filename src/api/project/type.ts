export interface IRepoResponse {
  name: string;
  description?: string;
  language?: string;
}

export interface IRepoArrayResponse {
  repos: IRepoResponse[]
}


export interface IProjectRequest {
  projectName: string;
  repositoryName: string;
  description: string;
  skills: string[];
}

export interface IOrganization {
  organizations: string[]
}
