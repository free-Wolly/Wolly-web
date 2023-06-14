export const classNames = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");
