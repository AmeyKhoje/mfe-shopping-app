import {
  FC,
  ReactNode,
  createElement,
  useContext,
} from 'react';
import GridContext from 'src/context/GridContext';
import GridElement from './GridElement';

const GridElementsRenderer = () => {
  const { divideBy, elements, gutterSpace } =
    useContext(GridContext);
  let ct = 0;
  return elements.map((item, index) => {
    let position: string | null =
      (ct === 0 && 'start') || null;
    if (ct === divideBy.length) {
      position = 'end';
      ct = 0;
    }

    const element = createElement<{
      children: ReactNode;
      customStyle: any;
      key: string;
    }>(GridElement as FC, {
      key:
        item?.element?.toLocaleString() +
        '' +
        index,
      customStyle: {
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
      children: item.element,
    });
    ++ct;
    return element;
  });
};

export default GridElementsRenderer;
