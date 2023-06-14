import React, { useState } from "react";
import ClientSignUpForm from "./components/ClientSignUpForm";
import VerifyCodeForm from "./components/VerifyCodeForm";
import UpdateMyProfileForm from "./components/UpdateMyProfileForm";

export default function SignUp() {
  const [mobile, setMobile] = useState("");
  const [sendCodeSuccessMessage, setSendCodeSuccessMessage] = useState("");
  const [verifyCodeSuccessMessage, setVerifyCodeSuccessMessage] = useState("");
  const [successfulSignUp, setSuccessfulSignUp] = useState(false);
  const [token, setToken] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <>
      {successfulSignUp ? (
        <div>{fullName} თქვენ წარმატებით გაიარეთ რეგისტრაცია</div>
      ) : (
        <div>
          {!sendCodeSuccessMessage ? (
            <ClientSignUpForm
              setSendCodeSuccessMessage={setSendCodeSuccessMessage}
              setMobile={setMobile}
              setToken={setToken}
            />
          ) : (
            <>
              {!verifyCodeSuccessMessage ? (
                <VerifyCodeForm
                  setSendCodeSuccessMessage={setSendCodeSuccessMessage}
                  mobile={mobile}
                  setVerifyCodeSuccessMessage={setVerifyCodeSuccessMessage}
                />
              ) : (
                <UpdateMyProfileForm
                  token={token}
                  setSuccessfulSignUp={setSuccessfulSignUp}
                  setFullName={setFullName}
                />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
