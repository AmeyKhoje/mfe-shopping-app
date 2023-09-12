import { EventHandler, RefObject, useEffect, useState } from 'react';

const useOutsideClick = ({
  ref,
  callback,
}: {
  ref: RefObject<HTMLDivElement>;
  callback: Function;
}) => {
  useEffect(() => {
    document.addEventListener('mousedown', (event: any) => {
      console.log('here', ref);

      if (ref?.current && !ref.current.contains(event?.target)) {
        callback(true);
      }
    });

    return () => document.removeEventListener('mousedown', () => {});
  }, [ref]);
};

export default useOutsideClick;
