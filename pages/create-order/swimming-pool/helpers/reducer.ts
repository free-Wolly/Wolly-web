export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "emptyInput":
      return {
        ...state,
        empty: "გთხოვთ შეავსოთ ყველა ველი",
      };
    case "notEmptyInput":
      return {
        ...state,
        empty: "",
      };
  }
}
