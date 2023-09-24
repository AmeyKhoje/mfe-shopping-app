const getNumber = (number: any) => {
  if (typeof number === 'string') {
    const isFloat = number?.split('.')?.length >= 2;
    if (isFloat) {
      return parseFloat(number);
    }

    return parseInt(number);
  }
  if (typeof number === 'number') {
    return Number.isInteger(number) ? Number(number) : number;
  }
  return 0;
};

const formatNumber = (
  number: number,
  decimalPlaces: number = 2,
  defaultDecimal: boolean = true
) => {
  if (typeof number === 'number')
    return parseFloat(`${number}`).toFixed(decimalPlaces);
  return parseFloat(`${getNumber(number)}`).toFixed(decimalPlaces);
};

export { getNumber, formatNumber };
