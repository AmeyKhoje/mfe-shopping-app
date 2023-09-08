import { Input, useStyleConfig } from '@chakra-ui/react';
import Typography from 'src/components/ui-elements/common/Typography';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { FormInputType } from 'src/types/Components';

const FormInput = ({
  error,
  name,
  onBlur,
  onChange,
  placeholder,
  size,
  type,
  value,
  variant,
}: FormInputType) => {
  const styles = useStyleConfig('FormInputTheme', {
    variant,
    size,
  });

  return (
    <div>
      <Input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        onBlur={onBlur}
        __css={styles}
        style={styles}
      />
      {error?.message && (
        <Typography color={COLOR_PALETTE.RED} size={1.5}>
          {error?.message}
        </Typography>
      )}
    </div>
  );
};

export default withChakraThemeProvider(FormInput);
