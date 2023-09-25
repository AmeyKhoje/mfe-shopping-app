import { getNumber, formatNumber } from 'utilityFunctions/helpers';

const getCheckoutDetails = (cart: any) => {
  let finalCheckout = {
    subTotal: 0,
    discount: 0,
    grandTotal: 0,
  };
  if (cart?.items?.length) {
    cart?.items?.forEach((item: any) => {
      let itemPrice = 0;
      let itemDiscountedPrice = 0;
      itemPrice = getNumber(item?.originalPrice) || 0;
      itemDiscountedPrice = getNumber(item?.discountedPrice) || 0;

      finalCheckout = {
        ...finalCheckout,
        subTotal: finalCheckout.subTotal + itemPrice * item.count,
        discount:
          finalCheckout.discount +
          (itemPrice - itemDiscountedPrice) * item?.count,
      };
    });

    finalCheckout = {
      ...finalCheckout,
      grandTotal: formatNumber(finalCheckout.subTotal - finalCheckout.discount),
      discount: formatNumber(finalCheckout.discount),
      subTotal: formatNumber(finalCheckout.subTotal),
    };
  }

  return finalCheckout;
};

export { getCheckoutDetails };
