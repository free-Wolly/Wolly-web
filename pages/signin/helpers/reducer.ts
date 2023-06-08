export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "invalidMobile":
      return { ...state, mobile: "მობილური უნდა შედგებოდეს 9 ციფრისგან" };
    case "invalidPassword":
      return {
        ...state,
        password: "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს",
      };
    case "goodMobile":
      return { ...state, mobile: "" };
    case "goodPassword":
      return { ...state, password: "" };
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
