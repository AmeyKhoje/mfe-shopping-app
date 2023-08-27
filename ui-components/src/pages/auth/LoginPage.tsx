import { Center, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

const LoginPage = ({ children }: { children: ReactNode }) => {
  return (
    <Container h={'100vh'} w={'100vw'} boxSizing="border-box">
      <Center h={'100vh'} w={'100vw'} boxSizing="border-box">
        {children}
      </Center>
    </Container>
  );
};

export default LoginPage;
