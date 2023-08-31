export const addToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const remoteFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
