import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import CustomSelectInner from './CustomSelectInner';
import CustomSelectContext, {
  ICustomSelectListItem,
} from 'src/contexts/CustomSelectContext';
import { useCallback, useMemo, useState } from 'react';

interface SelfProps {
  list: ArrayLike<ICustomSelectListItem>;
}

const CustomSelect = ({ list }: SelfProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const memoizedList = useMemo<ArrayLike<ICustomSelectListItem>>(() => {
    return list;
  }, [list]);

  const toggle = useCallback(
    (value?: boolean) => {
      setIsOpen(value || !isOpen);
    },
    [isOpen]
  );

  return (
    <CustomSelectContext.Provider
      value={{
        isOpen,
        list: memoizedList,
        toggle,
      }}
    >
      <CustomSelectInner />
    </CustomSelectContext.Provider>
  );
};

export default withChakraThemeProvider(CustomSelect);
