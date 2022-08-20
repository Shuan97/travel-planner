import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    enabled
      ? ((localStorage.theme = "dark"),
        document.documentElement.classList.add("dark"))
      : ((localStorage.theme = "light"),
        document.documentElement.classList.remove("dark"));

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-600"
      } transition-all relative inline-flex h-6 w-12 items-center rounded-full`}
    >
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-[26px]" : "translate-x-0.5"
        } transition-all duration-300 inline-block h-5 w-5 transform rounded-full bg-gray-200`}
      />
    </Switch>
  );
};

export default DarkModeToggle;
