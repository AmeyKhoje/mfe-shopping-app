import { CartList, Grid } from 'src/components';

const CartPage = () => {
  return (
    <div className="w-100 pl-10 pr-10 bg-light">
      <Grid
        divideBy={[60, 40]}
        elements={[
          <CartList />,
          <CartList />,
          <div>Hello</div>,
          <div>Hey</div>,
        ]}
        gutterSpace={2}
      />
      <div className="w-60pc ">
        <CartList />
      </div>
    </div>
  );
};

export default CartPage;
