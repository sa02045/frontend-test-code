export const delayFunction = (callback: () => void, delay: number) => {
  setTimeout(callback, delay);
};
