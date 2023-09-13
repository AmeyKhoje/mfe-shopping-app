import AddProductBare from 'src/components/bare/AddProductBare';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';
import { useGetAllProductsQuery } from 'src/store/services/ProductService';

const ShopHome = () => {
  const { data: products } = useGetAllProductsQuery(null);

  console.log(products);

  return (
    <>
      <ShopHomePage products={products} />
      <AddProductBare />
    </>
  );
};

export default ShopHome;
