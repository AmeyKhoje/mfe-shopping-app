import { EventHandler, RefObject, useEffect, useState } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Function) => {
  useEffect(() => {
    document.addEventListener('mousedown', (event: any) => {
      if (ref?.current && !ref.current.contains(event?.target)) {
        callback(true);
      } else callback(false);
    });

    return () => document.removeEventListener('mousedown', () => {});
  }, [ref]);
};

export default useOutsideClick;
