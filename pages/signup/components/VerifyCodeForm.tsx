import { useState } from "react";
import { useMutation } from "react-query";
import request from "graphql-request";
import { endpoint, language } from "../constants";
import verifyCodeMutation from "../../../graphql/mutation/verifyCode";
import ErrorMessage from "../../../components/Helpers/ErrorMessage";

const VerifyCodeForm = ({
  mobile,
  setVerifyCodeSuccessMessage,
  sendCodeSuccessMessage,
}: any) => {
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const verifyCodeVariables: {
    language: string;
    data: {
      mobile: string;
      code: string;
    };
  } = {
    language,
    data: {
      mobile,
      code,
    },
  };

  const verifyCode = useMutation(
    () => request(endpoint, verifyCodeMutation, verifyCodeVariables),
    {
      onSuccess(data: any) {
        setVerifyCodeSuccessMessage(data.verifyCode.message);
      },
      onError(error: any) {
        setErrorMessage(error.response.errors[0].message);
      },
    }
  );
  return (
    <>
      <div>{sendCodeSuccessMessage}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verifyCode.mutate();
        }}
      >
        <label>Enter Code</label>
        <input
          className="border-[2px]"
          onChange={(e) => {
            e.preventDefault();
            setCode(e.target.value);
          }}
          type="text"
          maxLength={4}
        />
        <ErrorMessage message={errorMessage} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default VerifyCodeForm;
