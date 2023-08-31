import { memo, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Events } from 'utilityFunctions/constants';

const AuthEvent = memo(() => {
  useEffect(() => {
    window.addEventListener(
      Events.USER_CREATE.SUCCESS,
      function handler(event: CustomEvent) {
        event.stopImmediatePropagation();
        toast('Hello', {
          duration: 5000,
          position: 'top-center',
        });
      }
    );

    return () =>
      window.removeEventListener(Events.USER_CREATE.SUCCESS, () => {});
  }, []);

  return <></>;
});

AuthEvent.displayName = 'AuthEvent';

export default AuthEvent;
