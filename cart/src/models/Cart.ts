import { TCartItem } from 'src/types/Cart';

class Cart {
  private items: Array<TCartItem> = [];
  private userId: string = '';

  constructor(items: Array<TCartItem>, userId: string) {
    this.items = items;
    this.userId = userId;
  }
}

export default Cart;
