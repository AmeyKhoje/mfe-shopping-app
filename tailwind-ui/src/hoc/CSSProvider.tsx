import '../index.css';

const CSSProvider = (Child: any) => {
  const Component = (props: any) => {
    return <Child {...props} />;
  };

  return Component;
};

export default CSSProvider;
