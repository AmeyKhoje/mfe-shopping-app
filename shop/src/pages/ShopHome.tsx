import AddProductBare from 'src/components/bare/AddProductBare';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';
import { useGetAllProductsQuery } from 'src/store/services/ProductService';

const ShopHome = () => {
  const { data: products } = useGetAllProductsQuery(null);

  return (
    <>
      <ShopHomePage />
      <AddProductBare />
    </>
  );
};

export default ShopHome;
