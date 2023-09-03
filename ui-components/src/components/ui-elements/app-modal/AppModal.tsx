import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ThemeConfig,
  extendTheme,
  useDisclosure,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import Typography from '../common/Typography';
import { CloseIcon } from '@chakra-ui/icons';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';

interface SelfProps {
  header?: string;
  isClosable?: boolean;
  content: any;
  footerActions?: boolean;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  defaultOpen?: boolean;
}

const theme = extendTheme({
  components: {
    Modal: {
      variants: {
        wide: {
          content: {
            width: '90rem',
          },
        },
      },
    },
  },
});

const AppModal = ({
  content,
  footerActions,
  header,
  isClosable = true,
  onPrimaryAction,
  onSecondaryAction,
  defaultOpen,
}: SelfProps) => {
  const styles = useMultiStyleConfig('AppModalTheme');
  const { onClose, isOpen } = useDisclosure({
    defaultIsOpen: !!defaultOpen,
  });

  return (
    <Box __css={styles.modal}>
      <Box>
        <Box __css={styles.modalHeader}>
          <Box width={'70%'} pr={'1rem'} boxSizing="border-box">
            <Typography size={1.7} bold={5} color={COLOR_PALETTE.WHITE}>
              {header}
            </Typography>
          </Box>
          <Box
            width={'30%'}
            boxSizing="border-box"
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
          >
            <IconButton aria-label="close" __css={styles.closeBtn}>
              <CloseIcon color={COLOR_PALETTE.WHITE} />
            </IconButton>
          </Box>
        </Box>
        <Box __css={styles.modalContent}>
          <Box height={'100vh'}>Hello</Box>
        </Box>
        <Box __css={styles.modalFooter}>
          <ButtonGroup ml={'auto'}>
            <Button __css={styles.secondaryActionButton}>Cancel</Button>
            <Button __css={styles.primaryActionButton}>Save</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default withChakraThemeProvider(AppModal);
