import request from "graphql-request";
import { useState } from "react";
import { useMutation } from "react-query";
import { endpoint } from "../signup/constants";
import createAddressMutation from "../../graphql/mutation/createAddress";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGdncmpqM2syMDI0MHVqdXAwY3Q3cDc5IiwiYXV0aFR5cGUiOiJjbGllbnQiLCJpYXQiOjE2ODE5MTA1MzR9.iY4mJYEvEYM06FtNqPawjmsmIZy7I1TK_Ner5YPc6yM";

export default function CreateAddress() {
  const [formData, setFormData] = useState({
    cityId: "1",
    street: "",
    floor: "",
    entrance: "",
    apartment: "",
    details: "",
    longitude: null,
    latitude: null,
  });

  const createAddressVariables = {
    data: formData,
  };

  const header = { Authorization: token };

  const handleChange = (e: React.ChangeEvent<any>, field: string) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const createAddress = useMutation(
    () =>
      request(endpoint, createAddressMutation, createAddressVariables, header),
    {
      onSuccess(data: any) {
        console.log(data.createAddress.id);
      },
      onError(error: any) {
        console.log(error);
      },
    }
  );

  return (
    <div className="container mx-auto">
      <div className="font-bold text-[2rem]">Create Address</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createAddress.mutate();
        }}
      >
        <div className="flex flex-col gap-[1.25rem]">
          <input
            className="border-[2px] w-[30%] pl-[1rem]"
            type="text"
            placeholder="ქუჩა"
            onChange={(e) => handleChange(e, "street")}
          />
          <input
            className="border-[2px] w-[30%] pl-[1rem]"
            type="text"
            placeholder="სადარბაზო"
            onChange={(e) => handleChange(e, "entrance")}
          />
          <input
            className="border-[2px] w-[30%] pl-[1rem]"
            type="text"
            placeholder="სართული"
            onChange={(e) => handleChange(e, "floor")}
          />
          <input
            className="border-[2px] w-[30%] pl-[1rem]"
            type="text"
            placeholder="ბინის ნომერი"
            onChange={(e) => handleChange(e, "apartment")}
          />
          <input
            className="border-[2px] w-[30%] pl-[1rem]"
            type="text"
            placeholder="დამატებითი კომენტარი"
            onChange={(e) => handleChange(e, "details")}
          />
          <button type="submit" onClick={() => console.log(formData)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
