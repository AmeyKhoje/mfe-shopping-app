import { useCallback, useEffect, useMemo, useState } from 'react';
import Cart from 'src/models/Cart';
import { TCart } from 'src/types/Cart';

type TSelfProps = {
  cart: TCart | null;
  userId: string;
};

const useCartConstructor = ({ cart, userId }: TSelfProps) => {
  const [innerCart, setInnerCart] = useState<TCart | null>(null);
  const [innerUserId, setInnerUserId] = useState('');
  const memoizedCart = useMemo(() => {
    if (cart) {
      setInnerCart(cart);
    } else return null;
  }, [cart]);

  // const memoizedUserId = useMemo(() => {
  //   return userId;
  // }, [userId]);

  // useEffect(() => {
  //   setInnerUserId(userId);
  // }, [userId]);

  // console.log(memoizedUserId);

  const getCart = (id: string, count: number) => {
    // console.log(userId);

    if (!memoizedCart) {
      // console.log(memoizedUserId);

      return new Cart([{ productId: id, count: count }], userId);
    }
    if (count <= 0) {
      const cartItems = cart?.items.filter(
        (cartItem) => cartItem.productId !== id
      );
      return new Cart(cartItems || [], userId);
    }
    if (cart) {
      const isExists = cart?.items.findIndex((item) => item.productId === id);
      if (isExists) {
        const cartItems =
          cart?.items.map((item) => ({
            ...item,
            count: item.productId === id ? count : item.count,
          })) || [];
        return new Cart(cartItems, userId);
      } else {
        const cartItemsCopy = cart?.items;
        cartItemsCopy?.push({ productId: id, count });
        return new Cart(cartItemsCopy || [], userId);
      }
    }
  };

  return getCart;
};

export default useCartConstructor;
