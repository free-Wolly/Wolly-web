import request from "graphql-request";
import { useReducer, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { endpoint } from "../../signup/constants";
import getAllAdressesQuery from "../../../graphql/query/getAllAdresses";
import createSimpleOrderMutation from "../../../graphql/mutation/createSimpleOrder";
import reducer from "./helpers/reducer";
import InputWithValidation from "../../../components/Helpers/InputWithValidation";
import ErrorMessage from "../../../components/Helpers/ErrorMessage";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGdncmpqM2syMDI0MHVqdXAwY3Q3cDc5IiwiYXV0aFR5cGUiOiJjbGllbnQiLCJpYXQiOjE2ODE5MTA1MzR9.iY4mJYEvEYM06FtNqPawjmsmIZy7I1TK_Ner5YPc6yM";

export default function SwimmingPool() {
  const [formData, setFormData] = useState({
    squareMeter: "",
    poolType: "",
  });

  const [validationMessage, setValidationMessage] = useReducer(reducer, {
    empty: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<any>, field: string) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const header = { Authorization: token };

  const addressId: any = useQuery("getAllAddresses", () =>
    request(endpoint, getAllAdressesQuery, {}, header)
  );

  const createSimpleOrderVariables = {
    data: {
      swimmingPoolCleaning: {
        squareMeter: parseInt(formData.squareMeter),
        poolType: formData.poolType,
      },
      serviceType: "SWIMMING_POOL_CLEANING",
      serviceSubType: "BASIC",
      price: 100,
      startTime: "2023-08-08T12:00:00.000Z",
      endTime: "2023-08-08T12:00:00.000Z",
      duration: 8,
      paymentMethod: "CASH",
      addressId: addressId.data?.getAllAddresses[0]?.id,
    },
  };

  const createSimpleOrder = useMutation(
    () =>
      request(
        endpoint,
        createSimpleOrderMutation,
        createSimpleOrderVariables,
        header
      ),
    {
      onSuccess(data: any) {
        console.log(data);
      },
      onError(error: any) {
        setErrorMessage(error.response.errors[0].message);
      },
    }
  );

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setValidationMessage({ type: "notEmptyInput" });
    if (!!!formData.squareMeter || !!!formData.poolType) {
      setValidationMessage({ type: "emptyInput" });
    } else {
      createSimpleOrder.mutate();
    }
  };

  return (
    <div>
      <div>Swimming Pool</div>
      <form>
        <div className="flex flex-col gap-[2rem]">
          <InputWithValidation
            inputType="number"
            label="მ2"
            formData={formData}
            setFormData={setFormData}
            validationMessage={validationMessage}
            inputName="squareMeter"
          />
          <select
            className="border-[2px] w-[30%] pl-[1rem]"
            onChange={(e) => handleChange(e, "poolType")}
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              აუზის მდებარეობა
            </option>
            <option
              value={"INDOOR"}
              onChange={() => setFormData({ ...formData, poolType: "INDOOR" })}
            >
              შიდა
            </option>
            <option
              value={"OUTDOOR"}
              onChange={() => setFormData({ ...formData, poolType: "OUTDOOR" })}
            >
              გარე
            </option>
          </select>
        </div>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
        <ErrorMessage message={errorMessage} />
        <ErrorMessage message={validationMessage.empty} />
        {/* {Object.values(validationMessage).length > 0 &&
            Object.values(validationMessage).map((value: any) => {
              return <div key={value}>{value}</div>;
            })} */}
      </form>
    </div>
  );
}
