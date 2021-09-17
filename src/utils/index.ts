import { NoterType } from '../types';

export const checkIfNoterExists = (id: string, noters: NoterType[]): boolean => {
  if (noters.find((noter) => noter.id === id)) {
    return true;
  } else {
    return false;
  }
};