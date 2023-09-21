type TCartItem = {
  productId: string;
  count: number;
};

type TCart = {
  userId: string;
  items: Array<TCartItem>;
};

export { TCart, TCartItem };
