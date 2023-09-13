import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import appModalContext from 'src/contexts/AppModalContext';
import AppModalInner from './AppModalInner';
import { useEffect, useState } from 'react';

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

const AppModal = ({
  content,
  footerActions,
  header,
  isClosable = true,
  onPrimaryAction,
  onSecondaryAction,
  open,
  onClose,
  primaryActionLabel,
  secondaryActionLabel,
}: SelfProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible !== open) {
      setIsVisible(!!open);
    }
  }, [open]);

  const handleVisibility = (value: boolean) => {
    if (!value) {
      onClose();
      setIsVisible(!!value);
    } else {
      setIsVisible(!!value);
    }
  };

  return (
    <appModalContext.Provider
      value={{
        handleVisibility,
        isOpen: isVisible,
      }}
    >
      <AppModalInner
        header={header}
        content={content}
        footerActions={footerActions}
        isClosable={isClosable}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
        primaryActionLabel={primaryActionLabel}
        secondaryActionLabel={secondaryActionLabel}
      />
    </appModalContext.Provider>
  );
};

export default withChakraThemeProvider(AppModal);
