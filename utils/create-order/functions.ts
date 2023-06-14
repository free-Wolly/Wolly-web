export const ifNoDataRedirect = (data: any, router: any, type: string) => {
  if (JSON.stringify(data) === "{}") router.push(`/create-order/${type}`);
};

export const checkIfExists = (variable: string) => {
  if (variable === "true" || variable === "false") {
    return variable === "true" ? true : null;
  } else {
    return !!variable &&
      parseInt(variable) !== 0 &&
      !Number.isNaN(parseInt(variable))
      ? parseInt(variable)
      : null;
  }
};
