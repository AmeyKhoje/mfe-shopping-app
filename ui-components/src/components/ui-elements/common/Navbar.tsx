import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import Logo from 'src/images/logo-shop-easy.png';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import NavLink from './NavLink';
import NavProfile from './NavProfile';
import Typography from './Typography';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const Navbar = ({
  navbarLinks,
  isProfile = true,
}: {
  navbarLinks: Array<{ name: string; to: string }>;
  isProfile?: boolean;
}) => {
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
        maxWidth={'100%'}
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Box height={'5rem'} width={'auto'}>
            <Typography
              fontFamily={'cinzel'}
              size={3}
              color={COLOR_PALETTE.LIGHT}
              bold={6}
            >
              ShopEasy
            </Typography>
          </Box>
          <Box>
            <Flex alignItems={'center'}>
              {navbarLinks?.map((link) => (
                <Box
                  paddingRight={'2.5rem'}
                  _last={{ paddingRight: isProfile ? '1rem' : 0 }}
                >
                  <NavLink
                    name={link?.name}
                    to={link?.to}
                    styleProps={{
                      fontSize: '2.2rem',
                      fontFamily: `'Rubik', sans-serif`,
                    }}
                  />
                </Box>
              ))}
              <Box>
                <NavProfile />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default withChakraThemeProvider(Navbar);
