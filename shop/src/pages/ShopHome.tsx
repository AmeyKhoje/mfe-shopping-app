import { useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AddProductBare from 'src/components/bare/AddProductBare';
import { AppModal, FloatingActionButton } from 'uiComponents/components';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';
import { useSelector } from 'react-redux';

const ShopHome = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const openModalByDefault = useMemo(() => {
    return searchParams.get('newProduct');
  }, [searchParams]);

  const handleAddProductModalClose = () => {
    navigate('/shop');
    setIsAddProductModalOpen(false);
  };

  const handleAddProductModalOpen = () => {
    navigate('/shop?newProduct=true');
    setIsAddProductModalOpen(true);
  };

  console.log('here');

  return (
    <>
      <ShopHomePage />
      <AddProductBare />
    </>
  );
};

export default ShopHome;
