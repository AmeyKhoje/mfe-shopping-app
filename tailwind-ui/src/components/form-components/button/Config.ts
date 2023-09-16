const buttonSizes = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  fullSm: 'btn-full-sm',
  full: 'btn-full',
};
const buttonVariants = {
  primary:
    'bg-primary hover:bg-secondary text-white',
  secondary:
    'bg-secondary text-white hover:bg-primary',
  basic:
    'bg-accent-black text-black hover:bg-accent-black-light',
  dark: 'bg-black text-white hover:bg-secondary',
};

const textColor = {
  primary: 'text-white',
  secondary: 'text-white',
  basic: 'text-black',
  dark: 'text-white',
};

const roundedSizes = {
  xsm: 'rounded-xsm',
  sm: 'rounded-sm',
  md: 'rounded-md',
  all: 'rounded-all',
  none: 'rounded-none',
};

const iconSize: any = {
  base: 'w-2 h-2',
  sm: 'w-1 h-1',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
};

export {
  buttonSizes,
  buttonVariants,
  iconSize,
  roundedSizes,
  textColor,
};
