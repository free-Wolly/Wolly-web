import request from "graphql-request";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { endpoint } from "../../signup/constants";
import getAllAdressesQuery from "../../../graphql/query/getAllAdresses";
import createSimpleOrderMutation from "../../../graphql/mutation/createSimpleOrder";
import IncDecInput from "./components/IncDecInput";
import ErrorMessage from "../../../components/Helpers/ErrorMessage";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGdncmpqM2syMDI0MHVqdXAwY3Q3cDc5IiwiYXV0aFR5cGUiOiJjbGllbnQiLCJpYXQiOjE2ODE5MTA1MzR9.iY4mJYEvEYM06FtNqPawjmsmIZy7I1TK_Ner5YPc6yM";

export default function Maid() {
  const [formData, setFormData] = useState({
    quantity: 1,
    hours: 3,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const header = { Authorization: token };

  const addressId: any = useQuery("getAllAddresses", () =>
    request(endpoint, getAllAdressesQuery, {}, header)
  );

  const createSimpleOrderVariables = {
    data: {
      maid: {
        quantity: formData.quantity,
        hours: formData.hours,
      },
      serviceType: "MAID",
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
    createSimpleOrder.mutate();
  };

  return (
    <div>
      <div>Maid Cleaning</div>
      <form>
        <IncDecInput
          min={3}
          max={8}
          text="საათი"
          value={formData.hours}
          onDec={() =>
            setFormData({
              ...formData,
              hours: formData.hours - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              hours: formData.hours + 1,
            })
          }
        />
        <IncDecInput
          min={1}
          max={6}
          text="დიასახლისი"
          value={formData.quantity}
          onDec={() =>
            setFormData({
              ...formData,
              quantity: formData.quantity - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              quantity: formData.quantity + 1,
            })
          }
        />
        <ErrorMessage message={errorMessage} />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
