import { useState, useCallback } from 'react';

type Value = any;

const useToggle = (initialValue: Value) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = useCallback(
    (nextValue?: Value) => {
      setValue(typeof nextValue === 'boolean' ? nextValue : !value);
    },
    [value],
  );

  return [value, handleToggle];
};

export { useToggle };
