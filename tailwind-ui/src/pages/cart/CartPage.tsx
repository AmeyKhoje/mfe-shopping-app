import {
  CartCheckoutCard,
  CartList,
  Grid,
} from 'src/components';

const CartPage = () => {
  return (
    <div className="w-100 pl-10 pr-10 bg-light">
      <Grid
        divideBy={[60, 30, 10]}
        elements={[
          <CartList />,
          <CartCheckoutCard />,
        ]}
        gutterSpace={2}
      />
    </div>
  );
};

export default CartPage;
