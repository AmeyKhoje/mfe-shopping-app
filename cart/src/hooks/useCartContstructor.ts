import { useCallback, useEffect, useMemo, useState } from 'react';
import Cart from 'src/models/Cart';
import { TCart } from 'src/types/Cart';

type TSelfProps = {
  cart: TCart | null;
  userId: string;
};

const useCartConstructor = ({ cart, userId }: TSelfProps) => {
  const memoizedCart = useMemo(() => {
    return cart;
  }, [cart]);

  const getCart = (id: string, count: number) => {
    if (!memoizedCart) {
      return new Cart([{ productId: id, count: count }], userId);
    }
    if (count <= 0) {
      const cartItems = cart?.items.filter(
        (cartItem) => cartItem.productId !== id
      );
      return new Cart(cartItems || [], userId);
    }
    if (cart) {
      console.log(cart, memoizedCart);

      const isExists = cart?.items?.findIndex((item) => item?.productId === id);

      if (isExists >= 0) {
        const cartItems =
          cart?.items.map((item) => ({
            ...item,
            count: item.productId === id ? count : item.count,
          })) || [];
        return new Cart(cartItems, userId);
      } else {
        const cartItemsCopy = [...cart?.items, { productId: id, count }];
        return new Cart(cartItemsCopy || [], userId);
      }
    }
  };

  return getCart;
};

export default useCartConstructor;
