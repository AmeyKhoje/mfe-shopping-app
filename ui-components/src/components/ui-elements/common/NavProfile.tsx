import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import Typography from './Typography';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const NavProfile = () => {
  const styles = useMultiStyleConfig('NavProfileMenuTheme');

  return (
    <Box>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton __css={styles.button}>
              <Flex alignItems={'center'}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                  width={'3rem'}
                  height={'3rem'}
                  borderRadius={'50rem'}
                  marginRight={'1rem'}
                />
                <Typography
                  mb={0}
                  bold={5}
                  size={2}
                  color={COLOR_PALETTE.PRIMARY}
                >
                  Amey Khoje
                </Typography>
                <Box marginLeft={'1rem'}>
                  {isOpen ? (
                    <ChevronUpIcon color={COLOR_PALETTE.PRIMARY} />
                  ) : (
                    <ChevronDownIcon color={COLOR_PALETTE.PRIMARY} />
                  )}
                </Box>
              </Flex>
            </MenuButton>
            <MenuList __css={styles.list}>
              <MenuItem __css={styles.item}>Profile</MenuItem>
              <MenuItem __css={styles.item}>Logout</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default withChakraThemeProvider(NavProfile);
