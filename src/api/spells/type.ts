export interface IErrorInfoList {
  errorInfo: IErrorInfo[];
}

export interface IErrorInfo {
  help: string;
  errorIdx: number;
  correctMethod: number;
  start: number;
  errMsg: string;
  end: number;
  orgStr: string;
  candWord: string;
}
