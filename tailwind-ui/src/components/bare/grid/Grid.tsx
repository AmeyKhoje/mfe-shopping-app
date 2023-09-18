import {
  ComponentClass,
  FunctionComponent,
  ReactElement,
  ReactNode,
  createElement,
  useMemo,
} from 'react';
import CSSProvider from 'src/hoc/CSSProvider';

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

  const validateDivision = () => {
    let is = false;
    if (divideBy.length) {
      const sum = divideBy.reduce(
        (prev: number, cur: number) => {
          return prev + cur;
        },
        0,
      );
      if (sum <= 100 || sum > 0) {
        is = true;
      } else is = false;
    }
    return is;
  };

  const isValidDivision = validateDivision();
  if (!isValidDivision) {
    return <>Given wrong input</>;
  }

  const memoizedElements = useMemo(() => {
    let doneEls = 0;
    let spinner = 0;
    return elements.map(
      (item: ReactNode, index: number) => {
        let eachRowEls = 0;
        let isStart = spinner === 0;
        let isEnd = index === elements.length - 1;

        if (divideBy.length === 1) {
          eachRowEls = Math.trunc(
            100 / divideBy[0],
          );
        }
        if (divideBy.length > 1) {
          let count = 0;
          divideBy.forEach((t, i) => {
            if (count + t > 100) {
              return;
            }
            ++eachRowEls;
            count = count + t;
          });
        }

        if (eachRowEls > 1) {
          if (
            index > 0 &&
            index < elements.length - 1
          ) {
            if (doneEls + 1 === eachRowEls) {
              isEnd = true;
              spinner = 0;
            } else ++spinner;
          }
          if (index === elements.length - 1) {
            spinner = 0;
          }
          if (index === 0) {
            ++spinner;
          }
        } else {
          isEnd = true;
          isStart = true;
        }

        ++doneEls;

        return {
          isStart,
          isEnd,
          element: item,
        };
      },
    );
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
