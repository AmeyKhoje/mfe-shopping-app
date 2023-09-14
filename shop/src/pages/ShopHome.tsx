import AddProductBare from 'src/components/bare/AddProductBare';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';
import { useGetAllProductsQuery } from 'src/store/services/ProductService';
import { useTypedSelector } from 'src/store';
import { useMemo } from 'react';

const ShopHome = () => {
  useGetAllProductsQuery(null);

  const products = useTypedSelector((state: any) => state.product.products);

  const memoizedProducts = useMemo(() => {
    return products;
  }, [products?.toString()]);

  return (
    <>
      <ShopHomePage products={memoizedProducts} />
      <AddProductBare />
    </>
  );
};

export default ShopHome;
