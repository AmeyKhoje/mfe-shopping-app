import {
  ReactElement,
  ReactNode,
  cloneElement,
} from 'react';

const GridElement = ({
  children,
  customStyle,
  custom,
}: {
  children: any;
  customStyle: any;
  custom: any;
}) => {
  console.log(custom);

  const renderChildren = () =>
    cloneElement(children, { ...custom });
  return (
    <div
      className="grid-element"
      style={customStyle}
    >
      {renderChildren()}
    </div>
  );
};

export default GridElement;
