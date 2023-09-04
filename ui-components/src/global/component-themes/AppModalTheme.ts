import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { COLOR_PALETTE } from '../js-constants/Theme';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    'modal',
    'modalContent',
    'modalHeader',
    'modalBody',
    'modalFooter',
    'primaryActionButton',
    'secondaryActioButton',
  ]);

const baseStyle = definePartsStyle({
  modal: {
    minWidth: '60rem',
    position: 'fixed',
    top: '10rem',
    left: '50%',
    transform: 'translate(-50%, -150vh)',
    minHeight: '10rem',
    backgroundColor: COLOR_PALETTE.LIGHT,
    zIndex: '90',
    maxWidth: '80rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 0 2rem 0 rgba(0,0,0,0.15)',
  },
  modalBody: {},
  modalContent: {
    width: '100%',
    maxHeight: 'calc(100vh - 20rem - 12rem)',
    overflow: 'auto',
    padding: '2rem',
    boxSizing: 'border-box',
    backgroundColor: COLOR_PALETTE.WHITE,
    '&::-webkit-scrollbar': {
      width: '1rem',
    },
    '&::-webkit-scrollbar-track': {
      width: '1rem',
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      width: '1rem',
      backgroundColor: COLOR_PALETTE.ACCENT_BLACK_LIGHT,
      borderRadius: '1rem',
    },
  },
  modalFooter: {
    width: '100%',
    height: '6rem',
    padding: '0 2rem',
    boxSizing: 'border-box',
    backgroundColor: COLOR_PALETTE.WHITE,
    borderTop: `0.2rem solid ${COLOR_PALETTE.ACCENT_BLACK_BORDER}`,
    display: 'flex',
    alignItems: 'center',
  },
  modalHeader: {
    width: '100%',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: COLOR_PALETTE.SECONDARY,
    padding: '0 2rem',
    boxSizing: 'border-box',
  },
  primaryActionButton: {
    backgroundColor: COLOR_PALETTE.PRIMARY,
    color: COLOR_PALETTE.WHITE,
    fontSize: '1.8rem',
    fontFamily: 'main',
    border: 0,
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.7rem',
    cursor: 'pointer',
  },
  secondaryActionButton: {
    backgroundColor: COLOR_PALETTE.WHITE,
    color: COLOR_PALETTE.BLACK,
    fontSize: '1.8rem',
    fontFamily: 'main',
    border: 0,
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.7rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    _hover: {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
  closeBtn: {
    width: '3.5rem',
    height: '3.5rem',
    border: 0,
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: '1rem',
    cursor: 'pointer',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default defineMultiStyleConfig({
  baseStyle,
  variants: {
    open: {
      modal: {
        transform: 'translate(-50%, 0)',
      },
    },
  },
});
