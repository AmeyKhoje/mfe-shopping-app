import { useNavigate, useSearchParams } from 'react-router-dom';
import AddProductForm from '../forms/AddProductForm';
import { AppModal, FloatingActionButton } from 'uiComponents/components';
import { useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { productSchema } from 'src/schemas/ProductSchema';
import { addProduct } from 'src/firebase/FirebaseHelpers';
import { useSelector } from 'react-redux';
import { UserSliceInterface } from 'src/store/slices/UserSlice';

const AddProductBare = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver<yup.AnyObject>(productSchema),
  });
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

  const state: UserSliceInterface = useSelector(
    (state) => state
  ) as UserSliceInterface;

  console.log(state?.user?.user);

  const handleAddProduct = (data: any) => {
    // addProduct(data, )
  };

  return (
    <>
      <FloatingActionButton onClick={handleAddProductModalOpen} />
      <AppModal
        onClose={handleAddProductModalClose}
        content={<AddProductForm control={control} />}
        header={'Add New Product'}
        primaryActionLabel={'Add'}
        secondaryActionLabel={'Discard'}
        open={openModalByDefault || isAddProductModalOpen}
        onPrimaryAction={handleSubmit(handleAddProduct)}
      />
    </>
  );
};

export default AddProductBare;
