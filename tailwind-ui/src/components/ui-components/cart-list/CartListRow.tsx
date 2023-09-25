import TableFlex from 'src/components/bare/table-flex/TableFlex';
import Checkbox from 'src/components/form-components/checkbox';
import CSSProvider from 'src/hoc/CSSProvider';
import TailCounter from '../counter/TailContainer';
import { TrashIcon } from '@heroicons/react/24/outline';
import CartListProduct from './CartListProduct';

const CartListRow = ({
  item,
  handleAction,
}: any) => {
  const handleIncrement = () =>
    handleAction(
      item?.productId,
      item?.count + 1,
    );
  const handleDecrement = () =>
    handleAction(
      item?.productId,
      item?.count - 1,
    );

  return (
    <TableFlex>
      {/* <div className="w-5pc border-sm border-l-none border-t-none border-r-none flex items-center justify-center border-accent-black-border">
        <Checkbox />
      </div> */}
      <div className="w-51pc border-sm border-l-none p-3 border-t-none border-r-none flex items-center border-accent-black-border">
        <CartListProduct item={item} />
      </div>
      <div className="w-22pc border-sm border-l-none border-t-none border-r-none flex items-center  flex-col p-3 border-accent-black-border">
        <TailCounter
          count={item?.count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        {/* <button className="flex items-center p-0.5 hover:bg-light transition-all duration-200 rounded-sm mt-1">
          <TrashIcon width={'2rem'} />
          <span className="text-sm font-rubik ml-0.5 font-medium">
            Remove
          </span>
        </button> */}
      </div>
      <div className="w-22pc border-sm border-l-none border-t-none border-r-none border-accent-black-border p-3 flex flex-col justify-start">
        <p className="text-base2 font-rubik text-black font-medium text-right   border-accent-black-border pl-1 w-100">
          {item?.discountedPrice ||
            item?.originalPrice}
        </p>
        {item.discountedPrice && (
          <p className="text-sm font-rubik text-accent-text-1 font-medium text-right line-through border-accent-black-border pl-1 w-100">
            {item?.originalPrice}
          </p>
        )}
      </div>
    </TableFlex>
  );
};

export default CSSProvider(CartListRow);
