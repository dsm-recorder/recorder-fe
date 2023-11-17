export interface IPRRecords {
  id: string;
  title: string;
  type: PRType;
  importance: number;
  date: string;
}

export interface IPRRecordsList {
  prRecords: IPRRecords[];
}

export enum PRType {
  NEW_FEATURE = 'NEW_FEATURE',
  BUG_FIX = 'BUG_FIX',
  REFACTORING = 'REFACTORING',
}

export interface IPRResponse {
  title: string;
  content: string;
  importance: number;
  solution?: string;
  attachmentUrls: string[];
  type: PRType;
}

export interface IPRRequest {
  title: string;
  content: string;
  solution?: string;
  type: PRType;
  attachmentUrls: string[];
}

export interface IPRRequestList {
  prRecords: IPRRequest[]
}