type Match = {
  startTime: string;
  rule: string;
  stage1: string;
  stage2: string;
};

type FormatedResults = {
  regular: Match[];
  bankaraOpen: Match[];
  bankaraChallenge: Match[];
  x: Match[];
};

// TODO: 型をちゃんと定義する
export const format = (results: any): FormatedResults => {
  const formatedResults: FormatedResults = {
    regular: [],
    bankaraOpen: [],
    bankaraChallenge: [],
    x: [],
  };

  results.forEach((result: any) => {
    const match = {
      startTime: result.schedules.startTime,
      rule: result.rules.name,
      stage1: result.stage1.name,
      stage2: result.stage2.name,
    };

    if (result.match_types.key === "regular") {
      formatedResults.regular.push(match);
    } else if (result.match_types.key === "bankara_open") {
      formatedResults.bankaraOpen.push(match);
    } else if (result.match_types.key === "bankara_challenge") {
      formatedResults.bankaraChallenge.push(match);
    } else {
      formatedResults.x.push(match);
    }
  });

  return formatedResults;
};

export const addEmojiToRule = (text: string) => {
  switch (text) {
    case "ナワバリ":
      return "🎨「ナワバリ」";
    case "エリア":
      return "🏳️「エリア」";
    case "ホコ":
      return "🏆「ホコ」";
    case "ヤグラ":
      return "🚋「ヤグラ」";
    case "アサリ":
      return "🏈「アサリ」";
  }
};

export const keyToName = (key: string) => {
  switch (key) {
    case "regular":
      return "🎨レギュラーマッチ";
    case "bankaraOpen":
      return "🔥バンカラオープン";
    case "bankaraChallenge":
      return "🔥バンカラチャレンジ";
    case "x":
      return "🏅Xマッチ";
    default:
      return key;
  }
};
