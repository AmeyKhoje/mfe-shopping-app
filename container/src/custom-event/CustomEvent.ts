export const registerEvent = (name: string, data?: any) => {
  return new CustomEvent(name, {
    bubbles: false,
    detail: data,
    cancelable: true,
  });
};

export const dispatchEvent = (event: CustomEvent) =>
  window.dispatchEvent(event);
