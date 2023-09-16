import CSSProvider from 'src/hoc/CSSProvider';

const TableFLex = ({ children }: any) => {
  return (
    <div className="flex items-stretch place-items-center">
      {children}
    </div>
  );
};

export default CSSProvider(TableFLex);
