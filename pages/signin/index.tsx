import React, { useState } from "react";
import { useMutation } from "react-query";
import { endpoint, language } from "../signup/constants";
import signinMutation from "../../graphql/mutation/signin";
import request from "graphql-request";
import signoutMutation from "../../graphql/mutation/signout";

export default function SignIn() {
  const [mobileNumb, setMobileNumb] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validMobile = mobileNumb.replace(/\+995|[ ]/g, "");

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
      password,
      mobile: validMobile,
      authType: "client",
    },
  };

  const signin = useMutation(
    () => request(endpoint, signinMutation, signinVariables),
    {
      onSuccess(data: any) {
        setFirstName(data.signin.user.firstName);
        setLastName(data.signin.user.lastName);
        setToken(data.signin.token);
      },
      onError(error: any) {
        setErrorMessage(error.response.errors[0].message);
      },
    }
  );

  const signout = useMutation(() => request(endpoint, signoutMutation, {}), {
    onSuccess(data: any) {
      console.log(data.signout.message);
    },
    onError(error: any) {
      console.log(error.response.errors[0].message);
    },
  });

  const validateMobile = (mobile: string) => {
    const pattern = /^(\+995)?(5\d{8})$/;

    if (!pattern.test(mobile)) {
      setErrorMessage("მობილური უნდა შედგებოდეს 9 ციფრისგან");
    } else {
      setErrorMessage("");
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      setErrorMessage("პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს");
    } else {
      setErrorMessage("");
    }
  };

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    validateMobile(validMobile);
    validatePassword(password);
    if (!password || !mobileNumb) {
      setErrorMessage("გთხოვთ შეავსოთ ყველა ველი");
    } else if (errorMessage === "") signin.mutate();
  };

  return (
    <>
      <div>Sign In</div>
      <form>
        <label>მობილური</label>
        <input
          type="text"
          onChange={(e) => setMobileNumb(e.target.value)}
          onBlur={() => validateMobile(validMobile)}
        />
        <label>პაროლი</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword(password)}
        />
        <button type="submit" onClick={handleClick}>
          Sign In
        </button>
      </form>
      <div className="font-bold text-red-900">{errorMessage}</div>
      <div>{`Hello ${firstName} ${lastName}`}</div>
      <div>Token - {token}</div>

      <button onClick={() => signout.mutate()}>Sign Out</button>
    </>
  );
}
