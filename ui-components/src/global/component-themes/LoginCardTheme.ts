import { defineStyleConfig } from '@chakra-ui/react';
import { COLOR_PALETTE } from '../js-constants/Theme';

export default defineStyleConfig({
  baseStyle: {
    width: '35%',
    minHeight: '10rem',
    borderRadius: '1rem',
    backgroundColor: COLOR_PALETTE.LIGHT_BLUE,
    padding: '5.5rem 4rem',
    boxSizing: 'border-box',
  },
  defaultProps: {},
});
