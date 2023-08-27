import { defineStyleConfig } from '@chakra-ui/react';
import { COLOR_PALETTE } from '../js-constants/Theme';

export default defineStyleConfig({
  baseStyle: {
    fontWeight: '400',
    borderRadius: '0.5rem',
    transition: 'all 0.2s',
    fontFamily: `'Rubik', sans-serif`,
    outline: 'none',
    boxShadow: 'none',
    maxWidth: '100%',
    boxSizing: 'border-box',
    height: 'auto',
  },
  defaultProps: {
    size: 'md',
    variant: 'PRIMARY',
  },
  sizes: {
    sm: {
      fontSize: '1.2rem',
      padding: '0.7rem 1rem',
    },
    md: {
      fontSize: '2rem',
      padding: '1rem 1rem',
    },
    xl: {
      fontSize: '2.5rem',
      padding: '1.1rem 1.4rem',
    },
    xxl: {
      fontSize: '3rem',
      padding: '2.3rem 3rem',
    },
    fullWidth: {
      fontSize: '2.2rem',
      padding: '1rem',
      width: '100%',
    },
    autoWidth: {
      width: 'auto',
    },
  },
  variants: {
    PRIMARY: {
      backgroundColor: COLOR_PALETTE.LIGHT,
      color: COLOR_PALETTE.PRIMARY,
      border: `0.2rem solid ${COLOR_PALETTE.PRIMARY}`,
    },
    LIGHT: {
      backgroundColor: COLOR_PALETTE.WHITE,
      color: COLOR_PALETTE.BLACK,
      border: `0.2rem solid ${COLOR_PALETTE.LIGHT}`,
    },
    SECONDARY: {
      backgroundColor: COLOR_PALETTE.WHITE,
      color: COLOR_PALETTE.BLACK,
      border: `0.2rem solid ${COLOR_PALETTE.SECONDARY}`,
    },
  },
});
