import TableFlex from 'src/components/bare/table-flex/TableFlex';
import Checkbox from 'src/components/form-components/checkbox';
import CSSProvider from 'src/hoc/CSSProvider';

const CartListHeader = () => {
  return (
    <TableFlex>
      {/* <div className="w-5pc border-sm border-l-none border-t-none border-r-none h-5 flex items-center justify-center border-accent-black-border">
        <Checkbox />
      </div> */}
      <div className="w-51pc border-sm border-l-none border-t-none border-r-none h-5 flex items-center pl-3 border-accent-black-border">
        <p className="text-base2 font-rubik text-accent-text-1  ">
          Product
        </p>
      </div>
      <div className="w-22pc border-sm border-l-none border-t-none border-r-none h-5 flex items-center pl-3 border-accent-black-border">
        <p className="text-base2 font-rubik text-accent-text-1">
          Quantity
        </p>
      </div>
      <div className="w-22pc pl-3 border-sm border-l-none border-t-none border-r-none h-5 flex items-center justify-end pr-3 border-accent-black-border">
        <p className="text-base2 font-rubik text-accent-text-1 text-right">
          Price
        </p>
      </div>
    </TableFlex>
  );
};

export default CSSProvider(CartListHeader);
