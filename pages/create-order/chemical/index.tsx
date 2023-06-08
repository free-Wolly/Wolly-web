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

export default function Chemical() {
  const [formData, setFormData] = useState({
    twoSeaterSofa: 0,
    threeSeaterSofa: 0,
    softChair: 0,
    sixSeaterSofa: 0,
    mattress: 0,
    fourSeaterSofa: 0,
    fiveSeaterSofa: 0,
    carpet: 0,
    armchair: 0,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const header = { Authorization: token };

  const addressId: any = useQuery("getAllAddresses", () =>
    request(endpoint, getAllAdressesQuery, {}, header)
  );

  const checkIfExists = (variable: number) => {
    return variable !== 0 ? variable : null;
  };

  const createSimpleOrderVariables = {
    data: {
      chemicalCleaning: {
        twoSeaterSofa: checkIfExists(formData.twoSeaterSofa),
        threeSeaterSofa: checkIfExists(formData.threeSeaterSofa),
        softChair: checkIfExists(formData.softChair),
        sixSeaterSofa: checkIfExists(formData.sixSeaterSofa),
        mattress: checkIfExists(formData.mattress),
        fourSeaterSofa: checkIfExists(formData.fourSeaterSofa),
        fiveSeaterSofa: checkIfExists(formData.fiveSeaterSofa),
        carpet: checkIfExists(formData.carpet),
        armchair: checkIfExists(formData.armchair),
      },
      serviceType: "CHEMICAL_CLEANING",
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
    if (Object.values(formData).every((value) => value === 0)) {
      setErrorMessage("აირჩიეთ ავეჯი");
    } else {
      createSimpleOrder.mutate();
    }
  };

  return (
    <div>
      <div>Chemical Cleaning</div>
      <form>
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="რბილი იატაკი/ხალიჩა"
          value={formData.carpet}
          onDec={() =>
            setFormData({
              ...formData,
              carpet: formData.carpet - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              carpet: formData.carpet + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="სავარძელი"
          value={formData.armchair}
          onDec={() =>
            setFormData({
              ...formData,
              armchair: formData.armchair - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              armchair: formData.armchair + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="რბილი სკამი"
          value={formData.softChair}
          onDec={() =>
            setFormData({
              ...formData,
              softChair: formData.softChair - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              softChair: formData.softChair + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="მატრასი (ორივე მხარე)"
          value={formData.mattress}
          onDec={() =>
            setFormData({
              ...formData,
              mattress: formData.mattress - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              mattress: formData.mattress + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="ორ ადგილიანი დივანი"
          value={formData.twoSeaterSofa}
          onDec={() =>
            setFormData({
              ...formData,
              twoSeaterSofa: formData.twoSeaterSofa - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              twoSeaterSofa: formData.twoSeaterSofa + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="სამ ადგილიანი დივანი"
          value={formData.threeSeaterSofa}
          onDec={() =>
            setFormData({
              ...formData,
              threeSeaterSofa: formData.threeSeaterSofa - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              threeSeaterSofa: formData.threeSeaterSofa + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="ოთხ ადგილიანი დივანი"
          value={formData.fourSeaterSofa}
          onDec={() =>
            setFormData({
              ...formData,
              fourSeaterSofa: formData.fourSeaterSofa - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              fourSeaterSofa: formData.fourSeaterSofa + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="ხუთ ადგილიანი დივანი"
          value={formData.fiveSeaterSofa}
          onDec={() =>
            setFormData({
              ...formData,
              fiveSeaterSofa: formData.fiveSeaterSofa - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              fiveSeaterSofa: formData.fiveSeaterSofa + 1,
            })
          }
        />
        <IncDecInput
          setErrorMessage={setErrorMessage}
          furniture="ექვს ადგილიანი დივანი"
          value={formData.sixSeaterSofa}
          onDec={() =>
            setFormData({
              ...formData,
              sixSeaterSofa: formData.sixSeaterSofa - 1,
            })
          }
          onInc={() =>
            setFormData({
              ...formData,
              sixSeaterSofa: formData.sixSeaterSofa + 1,
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
