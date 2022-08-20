/**
 * Prevent flickering screen on theme load with Next.js and TailwindCSS
 * @see https://stackoverflow.com/questions/71277655/prevent-page-flash-in-next-js-12-with-tailwind-css-class-based-dark-mode
 */
(function initTheme() {
  // var theme = localStorage.getItem("theme") || "light";
  // if (theme === "dark") {
  //   document.querySelector("html").classList.add("dark");
  // }
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
})();
