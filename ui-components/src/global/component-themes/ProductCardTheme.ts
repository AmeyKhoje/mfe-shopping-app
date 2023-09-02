import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { COLOR_PALETTE } from '../js-constants/Theme';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    'container',
    'inner',
    'image',
    'priceText',
    'discountPrice',
    'title',
    'button',
    'imageContainer',
  ]);

const baseStyle = definePartsStyle({
  button: {
    padding: '1rem',
    width: '100%',
    borderRadius: '5rem',
    border: `0.1rem solid ${COLOR_PALETTE.ACCENT_BLACK_BORDER}`,
    backgroundColor: COLOR_PALETTE.LIGHT,
    color: COLOR_PALETTE.BLACK,
    fontFamily: 'main',
    fontSize: '2.1rem',
    cursor: 'pointer',
    transition: 'all 0.1s',
    _hover: {
      backgroundColor: COLOR_PALETTE.PRIMARY,
      color: COLOR_PALETTE.WHITE,
      border: `0.1rem solid ${COLOR_PALETTE.PRIMARY}`,
    },
  },
  container: {
    width: '100%',
    borderRadius: '2.5rem',
    border: `0.08rem solid ${COLOR_PALETTE.ACCENT_BLACK}`,
    overflow: 'hidden',
    // marginRight: '2rem',
    // marginBottom: '4rem',
  },
  discountPrice: {
    fontFamily: 'main',
    fontSize: '1.8rem',
    fontWeight: 500,
    color: COLOR_PALETTE.SECONDARY,
  },
  image: {
    width: '100%',
    maxHeight: '100%',
  },
  inner: {
    padding: '3.5rem 2rem',
  },
  priceText: {
    fontFamily: 'main',
    fontSize: '1.8rem',
    fontWeight: 500,
  },
  title: {},
  imageContainer: {
    width: '100%',
    height: '32rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProductCardTheme = defineMultiStyleConfig({ baseStyle });

export default ProductCardTheme;
