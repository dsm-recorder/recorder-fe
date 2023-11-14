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