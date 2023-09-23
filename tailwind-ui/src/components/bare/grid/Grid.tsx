import {
  ReactNode,
  createElement,
  useMemo,
} from 'react';
import CSSProvider from 'src/hoc/CSSProvider';
import {
  checkValidDivision,
  getElements,
} from './GridHelper';
import GridInner from './GridInner';
import GridContext from 'src/context/GridContext';

type SelfProps = {
  gutterSpace: number;
  divideBy: Array<number>;
  elements: Array<ReactNode>;
  componentProps?: Array<any>;
};

const Grid = ({
  divideBy,
  gutterSpace,
  elements,
  componentProps,
}: SelfProps) => {
  if (!elements?.length || !divideBy?.length) {
    return <>Provide data</>;
  }

  const isValidDivision = useMemo(() => {
    return checkValidDivision(divideBy);
  }, [divideBy]);

  if (!isValidDivision) {
    return <>Given wrong input</>;
  }

  const memoizedElements: {
    isStart: boolean;
    isEnd: boolean;
    element: ReactNode;
  }[] = useMemo(() => {
    return getElements(elements, divideBy);
  }, [
    elements.toString(),
    componentProps?.toString(),
  ]);

  return (
    <GridContext.Provider
      value={{
        divideBy,
        elements: memoizedElements,
        gutterSpace,
        componentProps,
      }}
    >
      <GridInner />
    </GridContext.Provider>
  );
};

export default CSSProvider(Grid);
