import { Box, Checkbox, ListItem, useMultiStyleConfig } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import Typography from 'src/components/ui-elements/common/Typography';
import CustomSelectContext, {
  ICustomSelectListItem,
} from 'src/contexts/CustomSelectContext';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { TCustomSelectListItem } from 'src/types/Components';

const CustomSelectListItem = ({
  multiSelectComponent,
  item: { label, id, ...rest },
}: TCustomSelectListItem) => {
  const [isChecked, setIsChecked] = useState(false);
  const styles = useMultiStyleConfig('CustomSelectTheme');
  const { isMultiSelect, handleSelect, toggle, selectedItem } =
    useContext(CustomSelectContext);

  const handleClick = () => {
    setIsChecked(!isChecked);
    handleSelect({ label, id, ...rest });
    !isMultiSelect && toggle(false);
  };

  useEffect(() => {
    if (!selectedItem) {
      setIsChecked(false);
    } else {
      if (Array.isArray(selectedItem)) {
        const isFound = selectedItem.find(
          (item: ICustomSelectListItem) => item.id === id
        );
        setIsChecked(!!isFound);
      } else {
        setIsChecked(selectedItem.id === id);
      }
    }
  }, [selectedItem]);

  return (
    <ListItem css={styles.listItem} onClick={handleClick}>
      {isMultiSelect &&
        (multiSelectComponent || (
          <Box mr={'0.5rem'} h={'100%'} display={'flex'} alignItems={'center'}>
            <Checkbox
              colorScheme={'primary'}
              size={'md'}
              isChecked={isChecked}
            />
          </Box>
        ))}
      <Typography size={1.5}>{label}</Typography>
    </ListItem>
  );
};

export default withChakraThemeProvider(CustomSelectListItem);
