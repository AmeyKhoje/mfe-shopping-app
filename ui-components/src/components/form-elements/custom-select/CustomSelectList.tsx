import { List, useMultiStyleConfig } from '@chakra-ui/react';
import { useContext } from 'react';
import CustomSelectContext, {
  ICustomSelectListItem,
} from 'src/contexts/CustomSelectContext';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';
import CustomSelectListItem from './CustomSelectListItem';

const CustomSelectList = () => {
  const styles = useMultiStyleConfig('CustomSelectTheme');
  const { list } = useContext(CustomSelectContext);

  console.log(list);

  return (
    <List __css={styles.list}>
      {list.map((item: ICustomSelectListItem, index: number) => {
        return (
          <CustomSelectListItem
            label={item.label}
            key={`${item.label}_${item.id}_${index}`}
          />
        );
      })}
    </List>
  );
};

export default withChakraThemeProvider(CustomSelectList);
