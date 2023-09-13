import { Box, Checkbox, ListItem, useMultiStyleConfig } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import Typography from 'src/components/ui-elements/common/Typography';
import CustomSelectContext from 'src/contexts/CustomSelectContext';
import { COLOR_PALETTE } from 'src/global/js-constants/Theme';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import { TCustomSelectListItem } from 'src/types/Components';

const CustomSelectListItem = ({
  label,
  id,
  multiSelectComponent,
}: TCustomSelectListItem) => {
  const [isChecked, setIsChecked] = useState(false);
  const styles = useMultiStyleConfig('CustomSelectTheme');
  const { isMultiSelect } = useContext(CustomSelectContext);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

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
