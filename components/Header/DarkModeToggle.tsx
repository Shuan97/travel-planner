import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  // find solution to retrieve state from localstorage
  // when window is undefined - TODO
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      console.log("setEnabled true");
      setEnabled(true);
    }
  }, []);

  const handleToggle = () => {
    setEnabled((prev) => {
      !prev
        ? ((localStorage.theme = "dark"),
          document.documentElement.classList.add("dark"))
        : ((localStorage.theme = "light"),
          document.documentElement.classList.remove("dark"));
      return !prev;
    });
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-600"
      } transition-all relative inline-flex h-6 w-12 items-center rounded-full`}
    >
      <span className='sr-only'>Dark mode</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-0"
        } transition-all duration-300 inline-block h-6 w-6 transform rounded-full bg-gray-200`}
      >
        {enabled ? "🌛" : "🌞"}
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
