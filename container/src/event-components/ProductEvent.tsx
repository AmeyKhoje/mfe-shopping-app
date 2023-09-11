import { memo, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Events } from 'utilityFunctions/constants';

const ProductEvent = memo(() => {
  useEffect(() => {
    window.addEventListener(Events.PRODUCT, (event: CustomEvent) => {
      event.stopImmediatePropagation();
      if (event.detail.success) {
        toast.success(event.detail.message, {
          duration: 5000,
          position: 'top-center',
        });
      } else {
        toast.error(event.detail.message, {
          duration: 5000,
          position: 'top-center',
        });
      }
    });

    // window.addEventListener(Events.NEW_PRODUCT.ERROR, (event: CustomEvent) => {
    //   event.stopImmediatePropagation();
    //   toast.error(event.detail.message, {
    //     duration: 5000,
    //     position: 'top-center',
    //   });
    // });

    return () => {
      window.removeEventListener(Events.PRODUCT, () => {});
      // window.removeEventListener(Events.NEW_PRODUCT.ERROR, () => {});
    };
  }, []);

  return <></>;
});

ProductEvent.displayName = 'ProductEvent';

export default ProductEvent;
