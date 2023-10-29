export function isBankingTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return hour === 23 && minute >= 0 && minute <= 30;
}

export function isBankingTime2(now = new Date()) {
  const hour = now.getHours();
  const minute = now.getMinutes();
  return hour === 23 && minute >= 0 && minute <= 30;
}
