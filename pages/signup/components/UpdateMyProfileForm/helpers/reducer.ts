export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "noFirstName":
      return { ...state, firstName: "სახელის ველის შევსება სავალდებულოა" };
    case "firstNameLetters":
      return {
        ...state,
        firstName: "სახელის ველის შევსებისას გამოიყენეთ მხოლოდ ასოები",
      };
    case "goodFirstName":
      return { ...state, firstName: "" };
    case "noLastName":
      return { ...state, lastName: "გვარის ველის შევსება სავალდებულოა" };
    case "lastNameLetters":
      return {
        ...state,
        lastName: "გვარის ველის შევსებისას გამოიყენეთ მხოლოდ ასოები",
      };
    case "goodLastName":
      return { ...state, lastName: "" };
    case "noPassword":
      return { ...state, password: "პაროლის ველის შევსება სავალდებულოა" };
    case "shortPassword":
      return {
        ...state,
        password: "პაროლი არ უნდა იყოს 6 სიმბოლოზე ნაკლები",
      };
    case "goodPassword":
      return { ...state, password: "" };
    case "noRetypePassword":
      return {
        ...state,
        retypePassword: "გაიმეორე პაროლის ველის შევსება სავალდებულოა",
      };
    case "noMatchRetypePassword":
      return { ...state, retypePassword: "პაროლი არ ემთხევა" };
    case "goodRetypePassword":
      return { ...state, retypePassword: "" };
  }
}
