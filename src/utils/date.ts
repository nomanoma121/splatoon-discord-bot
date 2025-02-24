export const getTime = (date: string) => {
  const d = new Date(date);
  return ` ${d.getHours().toString().padStart(2, "0")}:${d
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

export const getDate = (date: string) => {
  const d = new Date(date);
  // 曜日も返す
  const days = ["日", "月", "火", "水", "木", "金", "土"];

  return `${d.getMonth() + 1}/${d.getDate()} (${days[d.getDay()]})`;
};

export const isDateChanged = (pre: string, now: string) => {
  const preDate = new Date(pre);
  const nowDate = new Date(now);
  return preDate.getDate() !== nowDate.getDate();
};
