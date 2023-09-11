import AuthEvent from 'src/event-components/AuthEvent';
import ProductEvent from 'src/event-components/ProductEvent';
const EventHOC = (Component: any) => {
  const NewComponent = (props: any) => {
    return (
      <>
        <AuthEvent />
        <ProductEvent />
        <Component {...props} />
      </>
    );
  };

  return NewComponent;
};

export default EventHOC;
