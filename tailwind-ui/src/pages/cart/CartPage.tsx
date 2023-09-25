import {
  CartCheckoutCard,
  CartList,
  Grid,
} from 'src/components';

const CartPage = ({
  list,
  handleAction,
  checkout,
}: any) => {
  console.log(checkout);

  return (
    <div className="w-100 pl-14 pr-14 pt-5 pb-5">
      <Grid
        divideBy={[65, 35]}
        elements={[
          <CartList />,
          <CartCheckoutCard />,
        ]}
        gutterSpace={4}
        componentProps={[
          { cartList: list, handleAction },
          { checkout },
        ]}
      />
    </div>
  );
};

export default CartPage;
