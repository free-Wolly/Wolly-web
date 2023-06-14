import request from "graphql-request";
import { useReducer, useState } from "react";
import { useMutation } from "react-query";
import { endpoint } from "../../../../constants/signUp/constants";
import updateMyProfileMutation from "../../../../graphql/mutation/updateMyProfile";
import InputWithValidation from "../../../../components/Helpers/InputWithValidation";
import reducer from "./helpers/reducer";

const UpdateMyProfileForm = ({
  token,
  setSuccessfulSignUp,
  setFullName,
}: {
  token: string;
  setSuccessfulSignUp: (value: boolean) => void;
  setFullName: (value: string) => void;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    retypePassword: "",
  });

  const [validationMessage, setValidationMessage] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    password: "",
    retypePassword: "",
  });

  const header = { Authorization: token };

  const updateMyProfile = useMutation(
    () =>
      request(
        endpoint,
        updateMyProfileMutation,
        updateMyProfileVariables,
        header
      ),
    {
      onSuccess(data: any) {
        setSuccessfulSignUp(true);
        setFullName(
          data.updateMyProfile.user.firstName +
            " " +
            data.updateMyProfile.user.lastName
        );
      },
      onError(error: any) {
        console.log(error);
      },
    }
  );

  const updateMyProfileVariables: {
    data: {
      firstName: string;
      lastName: string;
      password: string;
    };
  } = {
    data: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    },
  };

  const validateFirstName = (firstName: string) => {
    const letters = /^[A-Za-zა-ჰ]+$/;

    if (!firstName) {
      setValidationMessage({ type: "noFirstName" });
    } else if (!firstName.match(letters)) {
      setValidationMessage({ type: "firstNameLetters" });
    } else {
      setValidationMessage({ type: "goodFirstName" });
    }
  };

  const validateLastName = (lastName: string) => {
    const letters = /^[A-Za-zა-ჰ]+$/;

    if (!lastName) {
      setValidationMessage({ type: "noLastName" });
    } else if (!lastName.match(letters)) {
      setValidationMessage({ type: "lastNameLetters" });
    } else {
      setValidationMessage({ type: "goodLastName" });
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setValidationMessage({ type: "noPassword" });
    } else if (password.length < 6) {
      setValidationMessage({ type: "shortPassword" });
    } else {
      setValidationMessage({ type: "goodPassword" });
    }
  };

  const validateRetypePassword = (retypePassword: string, password: string) => {
    if (!retypePassword) {
      setValidationMessage({ type: "noRetypePassword" });
    } else if (retypePassword !== password) {
      setValidationMessage({ type: "noMatchRetypePassword" });
    } else {
      setValidationMessage({ type: "goodRetypePassword" });
    }
  };

  const handleClick = () => {
    validateFirstName(formData.firstName);
    validateLastName(formData.lastName);
    validatePassword(formData.password);
    validateRetypePassword(formData.retypePassword, formData.password);
    if (Object.values(validationMessage).every((value) => value === "")) {
      updateMyProfile.mutate();
    }
  };

  return (
    <>
      <form>
        <InputWithValidation
          inputType="text"
          label="სახელი"
          formData={formData}
          setFormData={setFormData}
          validateInput={() => {
            validateFirstName(formData.firstName);
          }}
          validationMessage={validationMessage}
          inputName="firstName"
        />
        <InputWithValidation
          inputType="text"
          label="გვარი"
          formData={formData}
          setFormData={setFormData}
          validateInput={() => {
            validateLastName(formData.lastName);
          }}
          validationMessage={validationMessage}
          inputName="lastName"
        />
        <InputWithValidation
          inputType="password"
          label="პაროლი"
          formData={formData}
          setFormData={setFormData}
          validateInput={() => {
            validatePassword(formData.password);
          }}
          validationMessage={validationMessage}
          inputName="password"
        />
        <InputWithValidation
          inputType="password"
          label="გაიმეორე პაროლი"
          formData={formData}
          setFormData={setFormData}
          validateInput={() => {
            validateRetypePassword(formData.retypePassword, formData.password);
          }}
          validationMessage={validationMessage}
          inputName="retypePassword"
        />
        <button type="button" onClick={handleClick}>
          Finish
        </button>
      </form>
    </>
  );
};

export default UpdateMyProfileForm;
