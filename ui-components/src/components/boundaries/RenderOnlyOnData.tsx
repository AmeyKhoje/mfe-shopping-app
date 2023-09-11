import { ReactElement } from 'react';
import { useDataExistValidation } from 'utilityFunctions/hooks';

interface SelfProps {
  children: ReactElement;
  data: any;
  validation: {
    checkArrayLength?: number;
    checkExistsInObject?: string;
    checkStringLength?: number;
  };
}

const RenderOnlyOnData = ({ children, data, validation }: SelfProps) => {
  const isDataExists = useDataExistValidation(data, validation);
  return children;
};

export default RenderOnlyOnData;
