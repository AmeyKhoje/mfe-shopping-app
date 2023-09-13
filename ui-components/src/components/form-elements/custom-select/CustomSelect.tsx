import { memo, useCallback, useMemo, useState } from 'react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import CustomSelectInner from './CustomSelectInner';
import CustomSelectContext, {
  ICustomSelectListItem,
} from 'src/contexts/CustomSelectContext';

interface SelfProps {
  list: Array<ICustomSelectListItem>;
  isMultiSelect?: boolean;
  handleChange: Function;
}

const CustomSelect = memo(
  ({ list, isMultiSelect = false, handleChange }: SelfProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [singleSelectItem, setSingleSelectItem] =
      useState<ICustomSelectListItem | null>(null);
    const [multiSelectResponse, setMultiSelectResponse] = useState<
      ICustomSelectListItem[] | null
    >(null);

    const memoizedList = useMemo<Array<ICustomSelectListItem>>(() => {
      return list;
    }, [list]);

    const toggle = useCallback(
      (value?: boolean) => {
        setIsOpen(!!value);
      },
      [isOpen]
    );

    const handleSelect = (listItem: ICustomSelectListItem) => {
      if (!listItem.id) return;
      if (isMultiSelect) {
        let newArray: ICustomSelectListItem[] = [];
        const isExists = multiSelectResponse?.find(
          (item: ICustomSelectListItem) => item.id === listItem.id
        );
        if (isExists) {
          newArray =
            multiSelectResponse?.filter(
              (item: ICustomSelectListItem) => item.id !== listItem.id
            ) || [];
        } else {
          if (multiSelectResponse?.length) {
            newArray = [...multiSelectResponse, listItem];
          } else {
            newArray.push(listItem);
          }
        }
        handleChange(newArray);
        setMultiSelectResponse(newArray);
      } else {
        if (singleSelectItem?.id !== listItem.id) {
          handleChange(listItem);
          setSingleSelectItem(listItem);
        }
      }
    };

    const selectedItem = useMemo(() => {
      if (isMultiSelect) {
        return multiSelectResponse;
      }
      return singleSelectItem;
    }, [singleSelectItem, multiSelectResponse]);

    return (
      <CustomSelectContext.Provider
        value={{
          isOpen,
          list: memoizedList,
          toggle,
          isMultiSelect,
          handleSelect,
          selectedItem,
        }}
      >
        <CustomSelectInner />
      </CustomSelectContext.Provider>
    );
  }
);

export default withChakraThemeProvider(CustomSelect);
