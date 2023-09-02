import { createContext } from 'react';

type ProductCardContextType = {
  count: number;
  imgPath: string;
  originalPrice: number | string;
  discountedPrice?: number | string;
  title: string;
  id: string;
  actionHandler: Function;
};

const productCardContext = createContext<ProductCardContextType>({
  count: 0,
  imgPath: '',
  originalPrice: 245,
  title: 'Nikon 250',
  discountedPrice: 210,
  id: '76bkkyt7263',
  actionHandler: () => {},
});

export default productCardContext;
