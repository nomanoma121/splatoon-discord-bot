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

export const convertToISOJST = (date: string): string => {
  const offsetDate = new Date(date);
  offsetDate.setHours(offsetDate.getHours() + 9);

  const year = offsetDate.getUTCFullYear();
  const month = (offsetDate.getUTCMonth() + 1).toString().padStart(2, "0"); // 1月は0から始まるため
  const day = offsetDate.getUTCDate().toString().padStart(2, "0");
  const hour = offsetDate.getUTCHours().toString().padStart(2, "0");
  const minute = offsetDate.getUTCMinutes().toString().padStart(2, "0");
  const second = offsetDate.getUTCSeconds().toString().padStart(2, "0");

  const isoString = `${year}-${month}-${day}T${hour}:${minute}:${second}+09:00`;

  return isoString;
};

export const floorDate = (date: string): string => {
  const d = new Date(date);
  // 現在の時間が奇数ならそのまま、偶数なら1引く
  const beginHour =
    d.getHours() % 2 === 0 ? d.getHours() - 1 : d.getHours();
  return new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    beginHour,
    0,
    0
  ).toString();
};

export const ceilDate = (date: string) => {
  const d = new Date(date);
  const beginHour =
    d.getHours() % 2 === 0 ? d.getHours() + 1 : d.getHours() + 2;
  return new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    beginHour,
    0,
    0
  ).toString();
};
