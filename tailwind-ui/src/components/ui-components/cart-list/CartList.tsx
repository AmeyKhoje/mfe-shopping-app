import CSSProvider from 'src/hoc/CSSProvider';
import CartListHeader from './CartListHeader';
import CartListRow from './CartListRow';

const CartList = () => {
  return (
    <div className="w-100">
      <CartListHeader />
      <CartListRow />
      <CartListRow />
      <CartListRow />
      <CartListRow />
      <CartListRow />
    </div>
  );
};

export default CSSProvider(CartList);
