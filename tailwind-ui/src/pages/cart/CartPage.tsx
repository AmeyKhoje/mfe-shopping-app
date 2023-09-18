import {
  CartCheckoutCard,
  CartList,
  Grid,
} from 'src/components';

const CartPage = () => {
  return (
    <div className="w-100 pl-10 pr-10 bg-light">
      <Grid
        divideBy={[60, 40]}
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
