import AddProductForm from '../forms/AddProductForm';
import { AppModal, FloatingActionButton } from 'uiComponents/components';
import { useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { productSchema } from 'src/schemas/ProductSchema';
import { useSelector } from 'react-redux';
import { isEqual } from 'underscore';
import { addProduct, getAllProducts } from 'src/firebase/FirebaseHelpers';
import { ApiResponseInterface } from 'src/models/ApiResponse';
import {
  useAddProductQuery,
  useLazyAddProductQuery,
} from 'src/store/services/ProductService';

const AddProductBare = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [skipAdd, setSkipAdd] = useState(true);

  const { control, handleSubmit, reset, formState, getValues } = useForm({
    resolver: yupResolver<yup.AnyObject>(productSchema),
    mode: 'onChange',
  });

  const user: any = useSelector((state: any) => state?.user?.user, isEqual);

  const userId = useMemo(() => {
    return user?.uid || null;
  }, [user]);

  const [trigger, { isError }] = useLazyAddProductQuery();

  const handleAddProductModalClose = () => {
    reset(productSchema.getDefault());
    setIsAddProductModalOpen(false);
  };

  const handleAddProductModalOpen = () => {
    setIsAddProductModalOpen(true);
  };

  // const memoSkip = useMemo(() => {
  //   if (!isLoading) {
  //     setSkipAdd(true);
  //     !isUninitialized && handleAddProductModalClose();
  //   }
  //   return;
  // }, [isLoading]);

  const handleAddProduct = async (data: any) => {
    if (data && userId) {
      trigger({ data: getValues(), userId })
        .then(() => {
          if (!isError) {
            handleAddProductModalClose();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <FloatingActionButton onClick={handleAddProductModalOpen} />
      {isAddProductModalOpen && (
        <AppModal
          onClose={handleAddProductModalClose}
          content={<AddProductForm control={control} />}
          header={'Add New Product'}
          primaryActionLabel={'Add'}
          secondaryActionLabel={'Discard'}
          open={isAddProductModalOpen}
          onPrimaryAction={handleSubmit(handleAddProduct)}
        />
      )}
    </>
  );
};

export default AddProductBare;
