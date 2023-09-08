import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Image, Input, useMultiStyleConfig } from '@chakra-ui/react';
import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';
import withChakraThemeProvider from 'src/hoc/withChakraThemeProvider';

interface SelfProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FilePicker = ({ onChange }: SelfProps) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<any>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const styles = useMultiStyleConfig('FilePickerTheme');

  const handleOpenFileSelection = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  const clearInnerInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
      setPreview(e.target?.result);
    });

    if (event.target.files?.length) {
      reader.readAsDataURL(event.target.files[0]);
      setSelectedFile(event.target.files[0]);
    }
    onChange(event);
    clearInnerInput();
  };

  return (
    <Box __css={styles.container}>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <Box __css={styles.inputContainer}>
        <Input
          style={styles.input}
          type={'text'}
          readOnly
          isReadOnly
          placeholder={'Select file'}
          onClick={handleOpenFileSelection}
        />
        <AttachmentIcon
          width={'1.8rem'}
          height={'1.8rem'}
          __css={styles.icon}
        />
      </Box>
      {!!preview && !!selectedFile && (
        <Box __css={styles.previewContainer}>
          <Image __css={styles.preview} src={preview} />
        </Box>
      )}
    </Box>
  );
};

export default withChakraThemeProvider(FilePicker);
