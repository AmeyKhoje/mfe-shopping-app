import { Box, Container, Flex } from '@chakra-ui/react';
import Logo from 'src/images/logo-shop-easy.png';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import NavLink from './NavLink';
import NavProfile from './NavProfile';
import Typography from './Typography';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const Navbar = ({
  navbarLinks,
  isProfile = true,
  onLogout,
}: {
  navbarLinks: Array<{ name: string; to: string }>;
  isProfile?: boolean;
  onLogout: () => void;
}) => {
  const pathName = window.location.pathname.split('/')[1];

  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      width={'100%'}
      height={'8rem'}
      backgroundColor={COLOR_PALETTE.PRIMARY}
      zIndex={9}
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
                  borderBottom={
                    link?.to?.split('/')[1] === pathName
                      ? '0.5rem solid white'
                      : 'none'
                  }
                  textAlign={'center'}
                  marginRight={'2.5rem'}
                  _last={{ marginRight: isProfile ? '1rem' : 0 }}
                  key={link.name}
                >
                  <NavLink
                    name={link?.name}
                    to={link?.to}
                    styleProps={{
                      fontSize: '2.2rem',
                      fontFamily: `'Rubik', sans-serif`,
                    }}
                    disabled={link?.to?.split('/')[1] === pathName}
                  />
                </Box>
              ))}
              <Box>
                <NavProfile onLogout={onLogout} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default withChakraThemeProvider(Navbar);
