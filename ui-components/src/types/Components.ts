type color_string_type =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'LIGHT_BLUE'
  | 'LIGHT'
  | 'RED'
  | 'BLACK'
  | 'WHITE'
  | 'GREEN'
  | 'YELLOW';

export type FormButtonType = {
  title: string;
  onClick: () => void;
  variant: color_string_type;
  spacingLevel: number;
  size: 'sm' | 'md' | 'xl' | 'xxl' | 'fullWidth';
};

export type FormInputType = {
  value: string;
  placeholder: string;
  onChange: () => void;
  size: 'sm' | 'md' | 'xl' | 'xxl' | 'fullWidth';
  variant: color_string_type;
  error: { message: string };
  name: string;
  onBlur: () => void;
  type: string;
};
