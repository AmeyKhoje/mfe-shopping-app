import { useEffect } from 'react';
import useCartConstructor from 'src/hooks/useCartContstructor';
import { useTypedSelector } from 'src/store';
import {
  useLazyGetCartQuery,
  useLazyTriggerCartActionQuery,
} from 'src/store/services/CartService';
import { CartPage } from 'tailwindUI/pages';

const CartPageSelf = () => {
  const user = useTypedSelector((state: any) => state?.user);
  const cart = useTypedSelector((state: any) => state?.cart);

  const [getCartDb] = useLazyGetCartQuery();
  const [cartActionTrigger] = useLazyTriggerCartActionQuery();

  useEffect(() => {
    if (user?.user?.uid) {
      getCartDb(user?.user?.uid);
    }
  }, [user?.user?.uid]);

  const getCart = useCartConstructor({
    cart: cart?.cart || null,
    userId: user?.user?.uid,
  });

  const productAction = (id: string, count: number) => {
    const newCart = getCart(id, count);
    cartActionTrigger({ dbCart: cart?.cart, newCart });
  };

  return (
    <CartPage
      list={cart?.cart?.items}
      handleAction={productAction}
      checkout={cart?.checkout}
    />
  );
};

export default CartPageSelf;
