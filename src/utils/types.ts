export type Stage = {
  id: number;
  name: string;
  image: string;
}

export type MatchData = {
  startTime: string;
  endTime: string;
  rule: {
    key: string;
    name: string;
  };
  stages: Stage[]; 
  isFest: boolean;
}

export type FetchData = {
  
}
