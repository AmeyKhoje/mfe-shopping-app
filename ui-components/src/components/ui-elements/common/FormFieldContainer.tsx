import { Box, Flex } from '@chakra-ui/react';

const FormFieldContainer = ({
  children,
  center,
  noPb,
}: {
  children: any;
  center: boolean;
  noPb: boolean;
}) => {
  if (center) {
    return (
      <Flex
        paddingBottom={noPb ? 0 : '3rem'}
        _last={{ paddingBottom: 0 }}
        justifyContent={'center'}
      >
        {children}
      </Flex>
    );
  }
  return (
    <Box paddingBottom={'3rem'} _last={{ paddingBottom: 0 }}>
      {children}
    </Box>
  );
};

export default FormFieldContainer;
