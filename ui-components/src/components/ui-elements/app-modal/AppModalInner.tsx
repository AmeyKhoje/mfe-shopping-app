import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import Typography from '../common/Typography';
import { CloseIcon } from '@chakra-ui/icons';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { useContext } from 'react';
import appModalContext from 'src/contexts/AppModalContext';

interface SelfProps {
  header?: string;
  isClosable?: boolean;
  content: any;
  footerActions?: boolean;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  open?: boolean;
  onClose: () => void;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
}

const AppModalInner = ({
  header,
  primaryActionLabel = 'Save',
  secondaryActionLabel = 'Cancel',
  onPrimaryAction,
  content,
  footerActions = true,
  isClosable = true,
}: SelfProps) => {
  const { isOpen, handleVisibility } = useContext(appModalContext);

  const styles = useMultiStyleConfig('AppModalTheme', {
    variant: !!isOpen && 'open',
  });

  const handleClose = () => handleVisibility(false);

  return (
    <Box __css={styles.modal}>
      <Box>
        <Box __css={styles.modalHeader}>
          <Box width={'70%'} pr={'1rem'} boxSizing="border-box">
            <Typography size={1.7} bold={5} color={COLOR_PALETTE.WHITE}>
              {header}
            </Typography>
          </Box>
          {isClosable && (
            <Box
              width={'30%'}
              boxSizing="border-box"
              display={'flex'}
              justifyContent={'flex-end'}
              alignItems={'center'}
            >
              <IconButton
                aria-label="close"
                __css={styles.closeBtn}
                onClick={handleClose}
              >
                <CloseIcon color={COLOR_PALETTE.WHITE} />
              </IconButton>
            </Box>
          )}
        </Box>
        <Box __css={styles.modalContent}>
          <Box>{content}</Box>
        </Box>
        {footerActions && (
          <Box __css={styles.modalFooter}>
            <ButtonGroup ml={'auto'}>
              <Button
                __css={styles.secondaryActionButton}
                onClick={handleClose}
              >
                {secondaryActionLabel}
              </Button>
              <Button
                __css={styles.primaryActionButton}
                onClick={onPrimaryAction}
              >
                {primaryActionLabel}
              </Button>
            </ButtonGroup>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default withChakraThemeProvider(AppModalInner);
