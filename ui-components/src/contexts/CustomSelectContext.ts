import { createContext } from 'react';

export interface ICustomSelectListItem {
  label: string;
  id: string;
  [key: string]: any;
}

type TCustomSelect = {
  isOpen: boolean;
  list: Array<ICustomSelectListItem>;
  toggle: Function;
  isMultiSelect: boolean;
  handleSelect: Function;
  selectedItem: ICustomSelectListItem | ICustomSelectListItem[] | null;
};

export default createContext<TCustomSelect>({
  isOpen: false,
  list: [],
  toggle: () => {},
  isMultiSelect: false,
  handleSelect: () => {},
  selectedItem: null,
});
