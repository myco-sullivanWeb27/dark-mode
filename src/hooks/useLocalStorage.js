import React, { useState } from "react";
//setting up local storage
export default function useLocalStorage(key, initialValue) {
  //setting usestate to be a storedvalue and set storedvalue then getting the key from local storage
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    //returning item if in local storage it has item and if not just return initialvalue
    return item ? JSON.parse(item) : initialValue;
  });
  //setting the value, setstoredvalue to contain value and then set the key and value to local storage
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}
