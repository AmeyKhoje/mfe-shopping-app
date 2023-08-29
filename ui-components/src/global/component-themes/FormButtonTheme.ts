import { defineStyleConfig } from '@chakra-ui/react';
import { COLOR_PALETTE } from '../js-constants/Theme';

export default defineStyleConfig({
  baseStyle: {
    fontWeight: '400',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'main',
    border: 'none',
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
      fontSize: '1.8rem',
      padding: '1.3rem 2.2rem',
    },
    xl: {
      fontSize: '2rem',
      padding: '1.8rem 2.8rem',
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
  },
  variants: {
    PRIMARY: {
      backgroundColor: COLOR_PALETTE.PRIMARY,
      color: COLOR_PALETTE.LIGHT,
      _hover: {
        backgroundColor: COLOR_PALETTE.LIGHT,
        color: COLOR_PALETTE.PRIMARY,
      },
    },
    LIGHT: {
      backgroundColor: COLOR_PALETTE.LIGHT,
      color: COLOR_PALETTE.BLACK,
      _hover: {
        backgroundColor: COLOR_PALETTE.BLACK,
        color: COLOR_PALETTE.LIGHT,
      },
    },
    BLACK: {
      backgroundColor: COLOR_PALETTE.BLACK,
      color: COLOR_PALETTE.WHITE,
      _hover: {
        backgroundColor: COLOR_PALETTE.WHITE,
        color: COLOR_PALETTE.BLACK,
      },
    },
    SECONDARY: {
      backgroundColor: COLOR_PALETTE.SECONDARY,
      color: COLOR_PALETTE.LIGHT,
      _hover: {
        backgroundColor: COLOR_PALETTE.LIGHT,
        color: COLOR_PALETTE.BLACK,
      },
    },
  },
});
