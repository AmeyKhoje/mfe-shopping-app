import { useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AddProductForm from 'src/components/forms/AddProductForm';
import { AppModal, FloatingActionButton } from 'uiComponents/components';
import { ShopHome as ShopHomePage } from 'uiComponents/pages';

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

  return (
    <>
      <ShopHomePage />
      <FloatingActionButton onClick={handleAddProductModalOpen} />
      <AppModal
        onClose={handleAddProductModalClose}
        content={<AddProductForm />}
        header={'Add New Product'}
        primaryActionLabel={'Add'}
        secondaryActionLabel={'Discard'}
        open={openModalByDefault || isAddProductModalOpen}
      />
    </>
  );
};

export default ShopHome;
