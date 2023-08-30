import { ReactElement } from 'react';
import { Text } from '@chakra-ui/react';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const Typography = ({
  mb,
  children,
  size = 1,
  center,
  bold = 4,
  color = COLOR_PALETTE.BLACK,
  fontFamily = 'main',
}: {
  mb?: number;
  children: string | ReactElement;
  size?: number;
  center?: boolean;
  bold?: number;
  color?: string;
  fontFamily?: 'main' | 'cinzel';
}) => {
  return (
    <Text
      mb={`${mb}rem`}
      fontFamily={fontFamily}
      fontSize={`${size * 1.2}rem`}
      textAlign={center ? 'center' : 'inherit'}
      fontWeight={bold * 100}
      color={color}
    >
      {children}
    </Text>
  );
};

export default withChakraThemeProvider(Typography);
