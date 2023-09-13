import {
  PartsStyleObject,
  StyleConfig,
  StyleObjectOrFn,
  SystemStyleObject,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';
import { COLOR_PALETTE } from '../js-constants/Theme';
// import { StyledOptions } from '@emotion/styled';
import { Theme } from '@chakra-ui/react';

interface StyleOptions {
  theme: Theme;
  colorMode: 'light' | 'dark';
  colorScheme: string;
}

type StyleInterpolation =
  | { [part: string]: SystemStyleObject }
  | ((options: StyleOptions) => { [part: string]: SystemStyleObject });

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    'main',
    'labelContainer',
    'label',
    'popper',
    'list',
    'listItem',
  ]);

const baseStyle: StyleInterpolation = definePartsStyle({
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
  list: {
    width: '100%',
    padding: 0,
  },
  listItem: {
    width: '100%',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.5rem',
    overflow: 'hidden',
    boxSizing: 'border-box',
    transition: 'all 0.2s',
    backgroundColor: COLOR_PALETTE.LIGHT,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: COLOR_PALETTE.ACCENT_BLACK_LIGHT,
    },
  },
  popper: {
    position: 'absolute',
    left: 0,
    width: '100%',
    backgroundColor: COLOR_PALETTE.LIGHT,
    zIndex: 9,
    minHeight: '2rem',
    boxShadow: '0 0 1rem 0 rgba(0,0,0,0.1)',
    maxHeight: '25rem',
    overflowY: 'auto',
    borderRadius: '1rem',
    padding: '1rem 0',
    boxSizing: 'border-box',
  },
});

export default defineMultiStyleConfig({ baseStyle });
