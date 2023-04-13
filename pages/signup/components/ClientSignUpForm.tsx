import { useMutation } from "react-query";
import { endpoint, language } from "../constants";
import request from "graphql-request";
import clientSignUpMutation from "../../../graphql/mutation/clientSignUp";
import { useState } from "react";

const ClientSignUpForm = ({
  setMobile,
  setSendCodeSuccessMessage,
  setToken,
}: any) => {
  const [mobileNumb, setMobileNumb] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validMobile = mobileNumb.replace(/\+995|[ ]/g, "");

  const clientSignUpVariables: {
    language: string;
    data: {
      mobile: string;
      language: string;
    };
  } = {
    language,
    data: {
      language,
      mobile: validMobile,
    },
  };

  const clientSignUp = useMutation(
    () => request(endpoint, clientSignUpMutation, clientSignUpVariables),
    {
      onSuccess(data: any, variables, context) {
        setSendCodeSuccessMessage(data.clientSignUp.user.verificationCode);
        setToken(data.clientSignUp.token);
      },
      onError(error: any, variables, context) {
        setErrorMessage(error.response.errors[0].message);
      },
    }
  );

  const validateMobile = (mobile: string) => {
    const pattern = /^(\+995)?(5\d{8})$/;

    return pattern.test(mobile);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateMobile(validMobile)) {
          setMobile(validMobile);
          clientSignUp.mutate();
        } else {
          setErrorMessage("ნომერი არ არის ვალიდური");
        }
      }}
    >
      <label>Sign Up</label>
      <input
        className="border-[2px]"
        onChange={(e) => {
          e.preventDefault();
          setMobileNumb(e.target.value);
        }}
      />
      <div className="h-[2rem] text-red-800">{errorMessage}</div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ClientSignUpForm;
