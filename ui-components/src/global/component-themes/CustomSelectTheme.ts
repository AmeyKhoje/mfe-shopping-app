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
  popper: {},
});

export default defineMultiStyleConfig({ baseStyle });
