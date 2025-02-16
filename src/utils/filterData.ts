type Schedule = {
  startTime: string;
  endTime: string;
  matchTypeKey: string;
  ruleKey: string;
  stage1ID: number;
  stage2ID: number;
};

type TargetKeys = 'regular' | 'bankara_open' | 'bankara_challenge' | 'x';

type MatchData = {
  
}

export const filterData = (data: any): Schedule[] => {
  console.log(data);
  try {
    // data.result が存在するかをチェック
    if (!data.result) {
      throw new Error('data.result is undefined or null');
    }

    return Object.entries(data.result)  // data.result を処理
      .filter(([key]) => targetKeys.includes(key))  // targetKeys に一致するプロパティをフィルタリング
      .flatMap(([key, matches]) => {  
        if (Array.isArray(matches)) {  // matches が配列であるか確認
          return matches.map((match: any) => ({
            startTime: match.startTime,
            endTime: match.endTime,
            matchTypeKey: match.matchTypeKey,
            ruleKey: match.rule.key,
            stage1ID: match.stages[0].id,
            stage2ID: match.stages[1].id,
          }));
        }
        return [];  // 配列でない場合は空配列を返す
      });
  } catch (err) {
    console.error(err);
    return [];
  }
};
