import { memo, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Events } from 'utilityFunctions/constants';

const AuthEvent = memo(() => {
  useEffect(() => {
    window.addEventListener(
      Events.USER_CREATE.SUCCESS,
      function handler(event: CustomEvent) {
        event.stopImmediatePropagation();
        toast.success('User created successfully', {
          duration: 5000,
          position: 'top-center',
        });
      }
    );

    window.addEventListener(
      Events.USER_CREATE.ERROR,
      function handler(event: CustomEvent) {
        event.stopImmediatePropagation();
        toast.error('Filed to create user', {
          duration: 5000,
          position: 'top-center',
          className: '',
        });
      }
    );

    window.addEventListener(
      Events.LOGIN.SUCCESS,
      function handler(event: CustomEvent) {
        event.stopImmediatePropagation();
        toast.success('Welcome!', {
          duration: 3000,
          position: 'top-center',
        });
      }
    );

    window.addEventListener(
      Events.LOGIN.ERROR,
      function handler(event: CustomEvent) {
        event.stopImmediatePropagation();
        toast.error(
          'Filed to login, check your credentials or try again later',
          {
            duration: 5000,
            position: 'top-center',
            className: '',
          }
        );
      }
    );

    return () => {
      window.removeEventListener(Events.USER_CREATE.SUCCESS, () => {});
      window.removeEventListener(Events.USER_CREATE.ERROR, () => {});
      window.removeEventListener(Events.LOGIN.SUCCESS, () => {});
      window.removeEventListener(Events.LOGIN.ERROR, () => {});
    };
  }, []);

  return <></>;
});

AuthEvent.displayName = 'AuthEvent';

export default AuthEvent;
