import { Box, Center, Container, Grid, GridItem } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';

const RegisterPage = ({ children }: { children: ReactElement }) => {
  return (
    <Container width={'60rem'} minH={'100vh'} margin={'auto'}>
      <Center>
        <Box
          width={'100%'}
          backgroundColor={COLOR_PALETTE.LIGHT}
          p={'5rem 3rem'}
          borderRadius={'1rem'}
          mt={'3rem'}
        >
          {children}
        </Box>
      </Center>
    </Container>
  );
};

export default RegisterPage;
