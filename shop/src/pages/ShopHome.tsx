import AddProductBare from 'src/components/bare/AddProductBare';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';
import { useGetAllProductsQuery } from 'src/store/services/ProductService';
import { useTypedSelector } from 'src/store';
import { useMemo } from 'react';
import useCartConstructor from 'src/hooks/useCartConstructor';

const ShopHome = () => {
  useGetAllProductsQuery(null);

  const products = useTypedSelector((state: any) => state.product.products);
  const user = useTypedSelector((state: any) => state?.user);

  const getCart = useCartConstructor({ cart: null, userId: user?.user?.uid });

  const memoizedProducts = useMemo(() => {
    return products;
  }, [products?.toString()]);

  const productAction = (id: string, count: number) => {
    const newCart = getCart(id, count);
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
