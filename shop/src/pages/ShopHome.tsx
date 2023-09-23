import AddProductBare from 'src/components/bare/AddProductBare';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';
import { useGetAllProductsQuery } from 'src/store/services/ProductService';
import { useTypedSelector } from 'src/store';
import { useEffect, useMemo } from 'react';
import useCartConstructor from 'src/hooks/useCartConstructor';
import {
  useLazyCreateNewCartQuery,
  useLazyGetCartQuery,
  useLazyTriggerCartActionQuery,
} from 'src/store/services/CartService';

const ShopHome = () => {
  useGetAllProductsQuery(null);
  const [cartActionTrigger, { isError }] = useLazyTriggerCartActionQuery();
  const [getCartTrigger] = useLazyGetCartQuery();
  const [createNewCart] = useLazyCreateNewCartQuery();

  const products = useTypedSelector((state: any) => state.product.products);
  const user = useTypedSelector((state: any) => state?.user);
  const cart = useTypedSelector((state: any) => state?.cart);

  useEffect(() => {
    if (user && user?.user?.uid) {
      getCartTrigger(user?.user?.uid);
    }
  }, [user]);

  const getCart = useCartConstructor({
    cart: cart?.cart || null,
    userId: user?.user?.uid,
  });

  const memoizedProducts = useMemo(() => {
    return products.map((product: any) => {
      const cartItem = cart?.cart?.items?.find(
        (cart: any) => cart?.productId === product?.id
      );

      if (product?.id === cartItem?.productId) {
        return {
          ...product,
          count: cartItem?.count,
        };
      } else {
        return {
          ...product,
          count: 0,
        };
      }
    });
  }, [products?.toString(), cart]);

  const productAction = (id: string, count: number) => {
    console.log(count);

    const newCart = getCart(id, count);
    console.log(newCart);

    cartActionTrigger({ dbCart: cart?.cart, newCart });
  };

  return (
    <>
      <ShopHomePage
        products={memoizedProducts}
        productAction={productAction}
        user={user}
      />
      <AddProductBare />
    </>
  );
};

export default ShopHome;
