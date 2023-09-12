import { createContext } from 'react';

export interface ICustomSelectListItem {
  title: string;
  id: string;
  [key: string]: any;
}

type TCustomSelect = {
  isOpen: boolean;
  list: ArrayLike<ICustomSelectListItem>;
  toggle: Function;
};

export default createContext<TCustomSelect>({
  isOpen: false,
  list: [],
  toggle: () => {},
});
