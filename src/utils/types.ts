export type TStage = {
  id: number;
  name: string;
  image: string;
}

export type TMatchData = {
  start_time: string;
  end_time: string;
  rule: {
    key: string;
    name: string;
  };
  stages: TStage[]; 
  isFest: boolean;
}

export type TFetchData = {
  result: {
    regular: TMatchData[];
    bankara_open: TMatchData[];
    bankara_challenge: TMatchData[];
    x: TMatchData[];
    event: any;
    fest: any;
  }
}

export type TSchedule = {
  startTime: string;
  endTime: string;
  matchTypeKey: string;
  ruleKey: string;
  stage1ID: number;
  stage2ID: number;
}
