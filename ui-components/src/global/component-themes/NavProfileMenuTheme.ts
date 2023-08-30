import {
  createMultiStyleConfigHelpers,
  defineStyleConfig,
} from '@chakra-ui/react';
import { COLOR_PALETTE } from '../js-constants/Theme';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    'button',
    'list',
    'item',
    'groupTitle',
    'command',
    'divider',
  ]);

const baseStyle = definePartsStyle({
  button: {
    backgroundColor: COLOR_PALETTE.LIGHT,
    padding: '1rem',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '0.5rem',
    fontWeight: 500,
  },
  command: {},
  divider: {},
  groupTitle: {},
  item: {
    padding: '0.8rem 1rem',
    backgroundColor: COLOR_PALETTE.LIGHT,
    border: 0,
    boxShadow: 'none',
    color: COLOR_PALETTE.PRIMARY,
    fontFamily: 'main',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: '2rem',
    fontWeight: '500',
    _hover: {
      backgroundColor: COLOR_PALETTE.WHITE,
    },
  },
  list: {
    minWidth: '20rem',
    borderRadius: '0.5rem',
    backgroundColor: COLOR_PALETTE.LIGHT,
    padding: '0.8rem 0',
  },
});

const NavProfileMenuTheme = defineMultiStyleConfig({ baseStyle });

export default NavProfileMenuTheme;
