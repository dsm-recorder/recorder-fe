export interface IPRRecordsType {
  id: string;
  title: string;
  type: PRType;
  importance: number;
  date: string;
}

export interface IPRRecordsListType {
  prRecords: IPRRecordsType[];
}

export enum PRType {
  NEW_FEATURE = 'NEW_FEATURE',
  BUG_FIX = 'BUG_FIX',
  REFACTORING = 'REFACTORING',
}

export interface IPRResponseType {
  title: string;
  content: string;
  importance: number;
  solution?: string;
  attachmentUrls: string[];
  type: PRType;
}

export interface IPRRequestType {
  title: string;
  content: string;
  solution?: string;
  type: PRType;
  attachmentUrls: string[];
}

export interface IPRRequestListType {
  prRecords: IPRRequestType[]
}