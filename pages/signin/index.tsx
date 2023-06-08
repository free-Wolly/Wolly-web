import React, { useReducer, useState } from "react";
import { useMutation } from "react-query";
import { endpoint, language } from "../signup/constants";
import signinMutation from "../../graphql/mutation/signin";
import request from "graphql-request";
import signoutMutation from "../../graphql/mutation/signout";
import reducer from "./helpers/reducer";
import InputWithValidation from "../../components/Helpers/InputWithValidation";
import ErrorMessage from "../../components/Helpers/ErrorMessage";
import { removeTokenCookie, setTokenCookie } from "../../utils/cookies";

export default function SignIn() {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useReducer(reducer, {
    mobile: "",
    password: "",
    empty: "",
  });
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validMobile = formData.mobile.replace(/\+995|[ ]/g, "");

  const signinVariables: {
    language: string;
    data: {
      mobile: string;
      password: string;
      authType: string;
    };
  } = {
    language,
    data: {
      password: formData.password,
      mobile: validMobile,
      authType: "client",
    },
  };

  const signin = useMutation(
    () => request(endpoint, signinMutation, signinVariables),
    {
      onSuccess(data: any) {
        setToken(data.signin.token);
        setTokenCookie(data.signin.token);
      },
      onError(error: any) {
        setErrorMessage(error.response.errors[0].message);
      },
    }
  );

  const signout = useMutation(() => request(endpoint, signoutMutation, {}), {
    onSuccess(data: any) {
      console.log(data.signout.message);
      removeTokenCookie();
    },
    onError(error: any) {
      console.log(error.response.errors[0].message);
    },
  });

  const validateMobile = (mobile: string) => {
    const pattern = /^(\+995)?(5\d{8})$/;

    if (!pattern.test(mobile)) {
      setValidationMessage({ type: "invalidMobile" });
    } else {
      setValidationMessage({ type: "goodMobile" });
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      setValidationMessage({ type: "invalidPassword" });
    } else {
      setValidationMessage({ type: "goodPassword" });
    }
  };

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setValidationMessage({ type: "notEmptyInput" });
    setErrorMessage("");
    validateMobile(validMobile);
    validatePassword(formData.password);
    if (!!!formData.password || !!!formData.password) {
      setValidationMessage({ type: "emptyInput" });
    } else if (
      Object.values(validationMessage).every((value) => value === "")
    ) {
      setValidationMessage({ type: "notEmptyInput" });
      setErrorMessage("");
      signin.mutate();
    }
  };

  return (
    <>
      <div>Sign In</div>
      <form>
        <InputWithValidation
          inputType="text"
          label="მობილური"
          formData={formData}
          setFormData={setFormData}
          validateInput={() => {
            validateMobile(validMobile);
          }}
          validationMessage={validationMessage}
          inputName="mobile"
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
        <button type="submit" onClick={handleClick}>
          Sign In
        </button>
      </form>
      <ErrorMessage message={errorMessage} />
      <ErrorMessage message={validationMessage.empty} />
      <div>Token - {token}</div>

      <button onClick={() => signout.mutate()}>Sign Out</button>
    </>
  );
}
