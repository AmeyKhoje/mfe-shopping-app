import { useMemo } from 'react';
import { isDataExists } from 'src/internals/helpers';

interface SelfProps {
  data: any;
  validation: {
    checkArrayLength?: number;
    checkExistsInObject?: string;
    checkStringLength?: number;
  };
}

const useDataExistValidation = ({ data, validation }: SelfProps) => {
  const isExist = useMemo(() => {
    return isDataExists(data, validation);
  }, [data]);

  return isExist;
};

export default useDataExistValidation;
