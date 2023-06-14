export const safeParseInt = (value: string | undefined): number | string => {
  try {
    if (typeof value === "undefined") {
      throw new Error("Value is undefined");
    }
    const intValue = parseInt(value, 10);
    if (Number.isNaN(intValue)) {
      throw new Error("Value is not a number");
    }
    return intValue;
  } catch (err) {
    return "N/A";
  }
};
