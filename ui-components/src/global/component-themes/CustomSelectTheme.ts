import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { COLOR_PALETTE } from '../js-constants/Theme';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    'main',
    'labelContainer',
    'label',
    'popper',
    'list',
    'listItem',
  ]);

const baseStyle = definePartsStyle({
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  labelContainer: {
    height: '5rem',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
  },
  main: {
    width: '100%',
    borderRadius: '1rem',
    backgroundColor: COLOR_PALETTE.LIGHT,
    position: 'relative',
  },
  list: {},
  listItem: {},
  popper: {
    position: 'absolute',
    top: '6rem',
    left: 0,
    width: '100%',
    backgroundColor: COLOR_PALETTE.WHITE,
    zIndex: 9,
    minHeight: '2rem',
    boxShadow: '0 0 1rem 0 rgba(0,0,0,0.1)',
    maxHeight: '25rem',
    overflowY: 'auto',
  },
});

export default defineMultiStyleConfig({ baseStyle });
