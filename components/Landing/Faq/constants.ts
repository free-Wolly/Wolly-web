export const openVariant = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
  show: {
    opacity: 1,
    marginTop: "10px",
    height: "auto",
    transition: {
      duration: 0.2,
    },
  },
};

export const imgVariant = {
  close: {
    rotate: 0,
    transition: { duration: 0.4 },
  },
  open: {
    rotate: -135,
    transition: { duration: 0.4 },
  },
};
