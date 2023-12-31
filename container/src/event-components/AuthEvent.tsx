import { memo, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Events } from 'utilityFunctions/constants';
import { setLoggedIn } from 'src/store/slices/AuthSlice';
import { useCustomDispatch } from 'src/store';
import {
  navigateToRemote,
  remoteFromLocalStorage,
} from 'utilityFunctions/helpers';
import { LocalStorageKeys } from 'utilityFunctions/constants';

const AuthEvent = memo(() => {
  const dispatch = useCustomDispatch();
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
        dispatch(setLoggedIn(true));
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

    window.addEventListener(
      Events.LOGOUT,
      function handler(event: CustomEvent) {
        event.stopImmediatePropagation();
        dispatch(setLoggedIn(true));
        remoteFromLocalStorage(LocalStorageKeys.IS_LOGGED_IN);
        navigateToRemote('/auth');
      }
    );

    return () => {
      window.removeEventListener(Events.USER_CREATE.SUCCESS, () => {});
      window.removeEventListener(Events.USER_CREATE.ERROR, () => {});
      window.removeEventListener(Events.LOGIN.SUCCESS, () => {});
      window.removeEventListener(Events.LOGIN.ERROR, () => {});
      window.removeEventListener(Events.LOGOUT, () => {});
    };
  }, []);

  return <></>;
});

AuthEvent.displayName = 'AuthEvent';

export default AuthEvent;
