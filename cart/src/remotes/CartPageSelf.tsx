import { useEffect } from 'react';
import { useTypedSelector } from 'src/store';
import {
  useGetCartQuery,
  useLazyGetCartQuery,
} from 'src/store/services/CartService';
import { CartPage } from 'tailwindUI/pages';
const CartPageSelf = () => {
  const user = useTypedSelector((state: any) => state?.user);
  const cartList = useTypedSelector((state: any) => state?.cart?.cart?.items);

  const [getCart] = useLazyGetCartQuery();

  useEffect(() => {
    if (user?.user?.uid) {
      getCart(user?.user?.uid);
    }
  }, [user?.user?.uid]);

  return (
    <CartPage
      list={cartList}
      handleAction={(id: string, count: number) => {
        console.log(id, count);
      }}
    />
  );
};

export default CartPageSelf;
