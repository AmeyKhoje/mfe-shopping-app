import { useMemo } from 'react';
import { Button, useStyleConfig } from '@chakra-ui/react';
import { COLOR_NAMES, COLOR_PALETTE } from 'src/global/js-constants/Theme';
import { FormButtonType } from 'src/types/Components';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const FormButton = ({
  onClick,
  title,
  variant,
  size = 'md',
}: FormButtonType) => {
  const styles = useStyleConfig('FormButtonTheme', {
    variant: variant || 'SECONDARY',
    size,
  });

  return (
    <Button onClick={onClick} __css={styles}>
      {title}
    </Button>
  );
};

export default withChakraThemeProvider(FormButton);
