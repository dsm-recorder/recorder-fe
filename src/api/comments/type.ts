export type commentType = {
  id: string;
  userLogoImageUrl: string;
  userAccountId: string;
  createdAt: string;
  content: string;
  isMine: boolean;
};

export interface GetProjectCommentsResponse {
  count: number;
  comments: commentType[];
}
