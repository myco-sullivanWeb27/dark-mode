import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
// setting up the useDarkmode hook with darkmode and set dark mode which is the stored value and the set stored value and then making the key "dark-mode" and setting the initial state to false
export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);
  useEffect(() => {
    //here im saying if dark mode is true then add dark mode class if its false remove darkmode class
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  // setting it up so that whenever there is a change with darkmode it runs the useEffect
  return [darkMode, setDarkMode];
}
