export const availableSlots = [
  { start: "T08:00:00.000Z" },
  { start: "T08:30:00.000Z" },
  { start: "T09:00:00.000Z" },
  { start: "T09:30:00.000Z" },
  { start: "T10:00:00.000Z" },
  { start: "T10:30:00.000Z" },
  { start: "T11:00:00.000Z" },
  { start: "T11:30:00.000Z" },
  { start: "T12:00:00.000Z" },
  { start: "T12:30:00.000Z" },
  { start: "T13:00:00.000Z" },
];

export const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
export const after10Days = new Date(
  new Date().setDate(new Date().getDate() + 10)
);
