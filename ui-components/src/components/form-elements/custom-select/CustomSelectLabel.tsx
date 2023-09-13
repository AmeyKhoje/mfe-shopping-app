import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, useMultiStyleConfig } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import Typography from 'src/components/ui-elements/common/Typography';
import CustomSelectContext, {
  ICustomSelectListItem,
} from 'src/contexts/CustomSelectContext';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

const CustomSelectLabel = () => {
  const styles = useMultiStyleConfig('CustomSelectTheme');
  const { selectedItem } = useContext(CustomSelectContext);
  const labelOnSelect = useMemo(() => {
    if (Array.isArray(selectedItem)) {
      let splitLabelArray: string[] = [];
      const remainingLabels: number =
        selectedItem?.length > 2 ? selectedItem.slice(2).length : 0;
      if (selectedItem.length <= 2) {
        splitLabelArray = selectedItem.map((item: ICustomSelectListItem) => {
          return item.label;
        });
      } else {
        splitLabelArray = selectedItem
          .slice(0, 2)
          .map((item: ICustomSelectListItem) => {
            return item.label;
          });
      }
      if (!remainingLabels) {
        return `${splitLabelArray.join(', ')}`;
      }
      return `${splitLabelArray.join(', ')}, +${remainingLabels}`;
    } else return selectedItem?.label;
  }, [selectedItem]);

  console.log(labelOnSelect);

  return (
    <Box __css={styles.label}>
      <Box>
        <Typography size={1.6}>
          {labelOnSelect ? labelOnSelect : 'Select Here'}
        </Typography>
      </Box>
      <Box>
        <ChevronDownIcon width={'3rem'} height={'3rem'} />
      </Box>
    </Box>
  );
};

export default withChakraThemeProvider(CustomSelectLabel);
