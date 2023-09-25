import { TailButton } from 'src/components/form-components';

const CartCheckoutCard = ({ checkout }: any) => {
  return (
    <div className="w-100 relative select-none bg-white rounded-md border-accent-black border-sm">
      <div className="w-100 p-2">
        <div className="flex items-center w-100">
          <div className="w-50pc">
            <p className="text-md font-rubik font-normal">
              Subtotal
            </p>
          </div>
          <div className="w-50pc">
            <p className="text-md font-rubik font-medium text-right">
              {checkout?.subTotal}
            </p>
          </div>
        </div>
        <div className="flex items-center w-100 pt-3 pb-2 border-accent-black border-b-sm">
          <div className="w-50pc">
            <p className="text-md font-rubik font-normal">
              Discount
            </p>
          </div>
          <div className="w-50pc">
            <p className="text-md font-rubik font-medium text-right text-accent-black-border">
              {checkout?.discount}
            </p>
          </div>
        </div>
        <div className="flex items-center w-100 pt-2 mb-3 border-accent-black">
          <div className="w-50pc">
            <p className="text-md font-rubik font-medium">
              Grand Total
            </p>
          </div>
          <div className="w-50pc">
            <p className="text-md font-rubik font-medium text-right">
              {checkout?.grandTotal}
            </p>
          </div>
        </div>
        <div>
          <TailButton
            title={'Checkout'}
            variant={'primary'}
            rounded={'md'}
            size={'md'}
            extraClasses={'w-100'}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCheckoutCard;
