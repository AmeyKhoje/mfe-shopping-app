import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import Logo from 'src/images/logo-shop-easy.png';
import Typography from './Typography';
import { navigateToRemote } from 'utilityFunctions/helpers';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';

const Navbar = () => {
  const navigate = (path: string) => {
    navigateToRemote(path);
  };
  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      width={'100%'}
      height={'8rem'}
      backgroundColor={COLOR_PALETTE.PRIMARY}
    >
      <Container
        padding={'1rem 5rem'}
        height={'100%'}
        display={'flex'}
        alignItems={'center'}
        width={'100%'}
        boxSizing={'border-box'}
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Box height={'5rem'} width={'auto'}>
            <Image src={Logo} width={'auto'} height={'100%'} />
          </Box>
          <Box>
            <SimpleGrid columns={2} spacing={'2rem'}>
              <Box>
                <Typography mb={0} bold={5} center={false} size={1}>
                  <Link onClick={() => navigate('cart')}>Cart</Link>
                </Typography>
              </Box>
              <Box>User</Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
