export interface IRepoResponse {
  name: string;
  description?: string;
  language?: string;
}

export interface IProjectRequest {
  projectName: string;
  repositoryName: string;
  skills: string[];
}
