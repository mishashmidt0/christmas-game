import { filterType, keyType } from '../filterValueSlice';

export const changeFilter = (
  state: filterType,
  name: string,
  isActive: boolean,
  key: keyType,
): filterType => {
  return {
    ...state,
    [key]: state[key].map(el => (el.name === name ? { ...el, isActive } : el)),
  };
};
