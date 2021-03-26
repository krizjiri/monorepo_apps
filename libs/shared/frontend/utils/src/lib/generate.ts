import { cloneElement, ReactElement } from 'react';

const generateArrFromItem = (item: ReactElement, length = 10) => {
  const arr = new Array(length).fill(item);

  return arr.map((item, index) => cloneElement(item, { key: index }));
};

export { generateArrFromItem };
