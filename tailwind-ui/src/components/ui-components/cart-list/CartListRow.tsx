import TableFlex from 'src/components/bare/table-flex/TableFlex';
import Checkbox from 'src/components/form-components/checkbox';
import CSSProvider from 'src/hoc/CSSProvider';
import TailCounter from '../counter/TailContainer';
import { TrashIcon } from '@heroicons/react/24/outline';
import CartListProduct from './CartListProduct';

const CartListRow = () => {
  return (
    <TableFlex>
      <div className="w-5pc border-sm border-l-none border-t-none border-r-none flex items-center justify-center border-accent-black-border">
        <Checkbox />
      </div>
      <div className="w-51pc border-sm border-l-none p-3 border-t-none border-r-none flex items-center border-accent-black-border">
        <CartListProduct />
      </div>
      <div className="w-22pc border-sm border-l-none border-t-none border-r-none flex items-center  flex-col p-3 border-accent-black-border">
        <TailCounter
          count={0}
          handleDecrement={() => {}}
          handleIncrement={() => {}}
        />
        <button className="flex items-center p-0.5 hover:bg-light transition-all duration-200 rounded-sm mt-1">
          <TrashIcon width={'2rem'} />
          <span className="text-sm font-rubik ml-0.5 font-medium">
            Remove
          </span>
        </button>
      </div>
      <div className="w-22pc border-sm border-l-none border-t-none border-r-none border-accent-black-border p-3 flex justify-end">
        <p className="text-base2 font-rubik text-black font-medium text-right   border-accent-black-border pl-1 w-100">
          $2500.00
        </p>
      </div>
    </TableFlex>
  );
};

export default CSSProvider(CartListRow);
