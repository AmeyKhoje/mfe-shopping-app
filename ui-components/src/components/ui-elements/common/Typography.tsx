import { ReactElement } from 'react';
import { Text } from '@chakra-ui/react';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const Typography = ({
  mb,
  children,
  size,
  center,
  bold,
  color = COLOR_PALETTE.WHITE,
}: {
  mb?: number;
  children: string | ReactElement;
  size?: number;
  center?: boolean;
  bold?: number;
  color?: string;
}) => {
  return (
    <Text
      mb={`${mb}rem`}
      fontFamily={`'Rubik', sans-serif`}
      fontSize={`${size || 1 * 1.2}rem`}
      textAlign={center ? 'center' : 'inherit'}
      fontWeight={bold || 4 * 100}
      color={color}
    >
      {children}
    </Text>
  );
};

export default withChakraThemeProvider(Typography);
