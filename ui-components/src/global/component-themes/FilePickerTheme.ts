import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { COLOR_PALETTE } from '../js-constants/Theme';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    'input',
    'preview',
    'container',
    'inputContainer',
    'icon',
    'previewContainer',
  ]);

const baseStyle = definePartsStyle({
  container: {
    maxWidth: '100%',
    display: 'flex',
    width: '100%',
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '4rem',
    fontSize: '1.8rem',
    fontFamily: `'Rubik', sans-serif`,
    paddingRight: '5rem',
    border: `0.1rem solid ${COLOR_PALETTE.PRIMARY}`,
    borderRadius: '0.5rem',
  },
  inputContainer: {
    width: '20rem',
    position: 'relative',
    height: '4rem',
  },
  icon: {
    position: 'absolute',
    right: '2rem',
    transform: 'translate(0, -50%)',
    top: '50%',
  },
  previewContainer: {
    width: 'calc(100% - 20rem)',
    boxSizing: 'border-box',
    padding: '1rem',
    backgroundColor: COLOR_PALETTE.LIGHT,
    marginLeft: '1rem',
    borderRadius: '0.7rem',
  },
  preview: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  },
});

export default defineMultiStyleConfig({ baseStyle });
