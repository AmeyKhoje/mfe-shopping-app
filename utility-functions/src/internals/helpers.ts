export const isDataExists = (
  data: any,
  validation: {
    checkArrayLength?: number;
    checkExistsInObject?: string;
    checkStringLength?: number;
  }
) => {
  if (!!data && !!Object.keys(validation)?.length) {
    if (validation.checkArrayLength) {
      return data.length === validation.checkArrayLength;
    }
    if (validation.checkExistsInObject) {
      return !!data[validation.checkExistsInObject];
    }
    if (validation.checkStringLength) {
      return data.split('').length;
    }
    return false;
  }
  return false;
};
