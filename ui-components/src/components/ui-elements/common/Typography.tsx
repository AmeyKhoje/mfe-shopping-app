import { Text } from '@chakra-ui/react';

const Typography = ({
  mb,
  children,
  size,
  center,
  bold,
}: {
  mb: number;
  children: string;
  size: number;
  center: boolean;
  bold: number;
}) => {
  return (
    <Text
      mb={`${mb}rem`}
      fontFamily={'main'}
      fontSize={`${size * 1.2}rem`}
      textAlign={center ? 'center' : 'inherit'}
      fontWeight={bold * 100}
    >
      {children}
    </Text>
  );
};

export default Typography;
