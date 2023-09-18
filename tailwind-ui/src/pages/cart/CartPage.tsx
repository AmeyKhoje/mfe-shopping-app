import {
  CartCheckoutCard,
  CartList,
  Grid,
} from 'src/components';

const CartPage = () => {
  return (
    <div className="w-100 pl-14 pr-14 pt-5 pb-5">
      <Grid
        divideBy={[65, 35]}
        elements={[
          <CartList />,
          <CartCheckoutCard />,
        ]}
        gutterSpace={4}
      />
    </div>
  );
};

export default CartPage;
