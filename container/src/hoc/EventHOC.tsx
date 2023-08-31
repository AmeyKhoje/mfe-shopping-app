import AuthEvent from 'src/event-components/AuthEvent';

const EventHOC = (Component: any) => {
  const NewComponent = (props: any) => {
    return (
      <>
        <AuthEvent />
        <Component {...props} />
      </>
    );
  };

  return NewComponent;
};

export default EventHOC;
