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

type SelfProps = {
  gutterSpace: number;
  divideBy: Array<number>;
  elements: Array<ReactNode>;
};

const Grid = ({
  divideBy,
  gutterSpace,
  elements,
}: SelfProps) => {
  let ct = 0;

  const isValidDivision = useMemo(() => {
    return checkValidDivision(divideBy);
  }, [divideBy]);

  if (!isValidDivision) {
    return <>Given wrong input</>;
  }

  const memoizedElements = useMemo(() => {
    return getElements(elements, divideBy);
  }, [elements.toString()]);

  return (
    <div className="flex items-start flex-wrap">
      {memoizedElements.map((item, index) => {
        let position: string | null =
          (ct === 0 && 'start') || null;
        if (ct === divideBy.length) {
          position = 'end';
          ct = 0;
        }

        const element = createElement(
          'div',
          {
            key:
              item?.element?.toLocaleString() +
              '' +
              index,
            style: {
              width: `${divideBy[ct]}%`,
              paddingLeft: item.isStart
                ? 0
                : item.isEnd
                ? `${gutterSpace / 2}rem`
                : `${gutterSpace / 2}rem`,
              paddingRight: item.isStart
                ? `${gutterSpace / 2}rem`
                : item.isEnd
                ? 0
                : `${gutterSpace / 2}rem`,
            },
          },
          [item.element],
        );
        ++ct;
        return element;
      })}
    </div>
  );
};

export default CSSProvider(Grid);
