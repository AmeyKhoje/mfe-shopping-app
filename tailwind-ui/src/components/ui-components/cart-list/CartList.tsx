import CSSProvider from 'src/hoc/CSSProvider';
import CartListHeader from './CartListHeader';
import CartListRow from './CartListRow';
import { TrashIcon } from '@heroicons/react/24/outline';

const CartList = ({ cartList }: any) => {
  return (
    <div className="w-100">
      <div className="flex items-center justify-between pb-3">
        <div className="w-50">
          <p className="text-lg font-medium font-rubik">
            Cart
          </p>
        </div>
        <div className="w-50">
          <button className="flex items-center p-0.5 hover:bg-light transition-all duration-200 rounded-sm mt-1">
            <TrashIcon width={'2rem'} />
            <span className="text-sm font-rubik ml-0.5 font-medium">
              Remove
            </span>
          </button>
        </div>
      </div>
      <CartListHeader />
      {cartList?.length &&
        cartList.map((item: any) => (
          <CartListRow item={item} />
        ))}
    </div>
  );
};

export default CSSProvider(CartList);
