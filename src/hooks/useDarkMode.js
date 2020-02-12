import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkmode() {
  const [DarkModeOnOrOff, setDarkModeOnOrOff] = useLocalStorage(
    "DarkModeToggle"
  );
  useEffect(() => {
    useLocalStorage(DarkModeOnOrOff)
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [DarkModeOnOrOff]);
  return [DarkModeOnOrOff, setDarkModeOnOrOff];
}
