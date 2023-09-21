import AddProductBare from 'src/components/bare/AddProductBare';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';
import { useGetAllProductsQuery } from 'src/store/services/ProductService';
import { useTypedSelector } from 'src/store';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useCartConstructor from 'src/hooks/useCartConstructor';
import { useSelector } from 'react-redux';

const ShopHome = () => {
  const [is, setId] = useState('');
  useGetAllProductsQuery(null);

  const products = useTypedSelector((state: any) => state.product.products);
  const user = useTypedSelector((state: any) => state?.user);

  const getCart = useCartConstructor({ cart: null, userId: user?.user?.uid });

  // console.log(user?.user?.uid);

  const memoizedProducts = useMemo(() => {
    return products;
  }, [products?.toString()]);

  const memoizedId = useMemo(() => {
    return user?.user?.uid;
  }, [user]);

  useEffect(() => {
    setId(user?.user?.uid);
  }, [user]);

  console.log(is);

  const productAction = (id: string, count: number) => {
    console.log(user);

    const newCart = getCart(id, count);
    console.log(newCart);
  };

  return (
    <>
      <button onClick={productAction}>Click</button>
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
