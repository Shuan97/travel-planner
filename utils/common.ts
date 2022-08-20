/**
 * Allows to pass string array of CSS classes into 'className' attribute
 * @param classes string array
 * @returns
 */
export const classNames = (...classes: any): string => {
  return classes.filter(Boolean).join(" ");
};
