import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { COLOR_PALETTE } from '../js-constants/Theme';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    'container',
    'button',
    'counterButton',
    'countDisplay',
    'counterButtonContainer',
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
  },
  countDisplay: {
    width: 'calc(100% - 11rem)',
    marginRight: '1rem',
    backgroundColor: COLOR_PALETTE.LIGHT,
    height: '4.5rem',
    borderRadius: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'main',
    fontSize: '2.2rem',
  },
  counterButton: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR_PALETTE.LIGHT_BLUE,
    color: COLOR_PALETTE.BLACK,
    border: 0,
    transition: 'all 0.2s',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    _hover: {
      backgroundColor: COLOR_PALETTE.PRIMARY,
      color: COLOR_PALETTE.WHITE,
    },
  },
  counterButtonContainer: {
    width: '4.5rem',
    height: '4.5rem',
  },
});

const CounterCardTheme = defineMultiStyleConfig({ baseStyle });
export default CounterCardTheme;
