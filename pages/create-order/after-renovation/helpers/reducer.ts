export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "emptyArea":
      return {
        ...state,
        area: "შეიყვანეთ საცხოვრებელი ფართი",
      };
    case "notEmptyArea":
      return {
        ...state,
        area: "",
      };
    case "emptyRooms":
      return {
        ...state,
        rooms: "დაამატეთ ოთახები",
      };
    case "notEmptyRooms":
      return {
        ...state,
        rooms: "",
      };
  }
}
