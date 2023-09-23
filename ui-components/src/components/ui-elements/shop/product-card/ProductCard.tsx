import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import ProductCardInner from './ProductCardInner';
import { memo, useCallback, useMemo } from 'react';
import productCardContext from 'src/contexts/ProductCardContext';

interface SelfProps {
  imagePath: string;
  title: string;
  discountedPrice: number | string;
  originalPrice: number | string;
  count: number;
  id: string;
  actionHandler: Function;
}

const ProductCard = memo(
  ({
    discountedPrice,
    imagePath,
    originalPrice,
    title,
    count,
    id,
    actionHandler,
  }: SelfProps) => {
    const memoizedDiscountedPrice = useMemo(() => {
      return discountedPrice;
    }, [discountedPrice]);

    const memoizedOriginalPrice = useMemo(() => {
      return originalPrice;
    }, [originalPrice]);

    const memoizedImagePath = useMemo(() => {
      return imagePath;
    }, [imagePath]);

    const memoizedTitle = useMemo(() => {
      return title;
    }, [title]);

    const memoizedCount = useMemo(() => {
      return count;
    }, [count]);

    const actionHandlerInner = (id: string, newCount: number) => {
      actionHandler(id, newCount);
    };

    console.log('count', memoizedCount);

    return (
      <productCardContext.Provider
        value={{
          count: memoizedCount,
          imgPath: memoizedImagePath,
          originalPrice: memoizedOriginalPrice,
          title: memoizedTitle,
          discountedPrice: memoizedDiscountedPrice,
          id,
          actionHandler: actionHandlerInner,
        }}
      >
        <ProductCardInner />
      </productCardContext.Provider>
    );
  }
);

export default withChakraThemeProvider(ProductCard);
