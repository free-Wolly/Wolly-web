import request from "graphql-request";
import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { endpoint } from "../signup/constants";
import createAddressMutation from "../../graphql/mutation/createAddress";
import Map from "./Map";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ErrorMessage from "../../components/Helpers/ErrorMessage";

export default function CreateAddress() {
  const [formData, setFormData] = useState({
    cityId: "1",
    street: "",
    floor: "",
    entrance: "",
    apartment: "",
    details: "",
    longitude: 0.0,
    latitude: 0.0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const header: any = { Authorization: Cookies.get("token") };
  const router = useRouter();

  const streetRef: any = useRef(null);
  const mapRef: any = useRef(null);

  useEffect(() => {
    !header.Authorization && router.push("/");
  }, [header.Authorization, router]);

  useEffect(() => {
    if (formData.street) {
      streetRef.current.style.display = "block";
      mapRef.current.style.display = "none";
    } else {
      streetRef.current.style.display = "none";
      mapRef.current.style.display = "block";
    }
  }, [formData.street]);

  const createAddressVariables = {
    data: formData,
  };

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

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!!!formData.street) {
      setErrorMessage("გთხოვთ მიუთითოთ მისამართი");
    } else {
      try {
        createAddress.mutate();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="font-bold text-[2rem]">Create Address</div>
      <div className="hidden" ref={streetRef}>
        <div>{formData.street}</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormData({ ...formData, street: "" });
          }}
        >
          შეცვლა
        </button>
      </div>
      <div ref={mapRef}>
        <Map
          setFormData={setFormData}
          formData={formData}
          setErrorMessage={setErrorMessage}
        />
      </div>

      <form>
        <div className="flex flex-col gap-[1.25rem]">
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
        </div>
        <button type="submit" onClick={handleClick}>
          დამატება
        </button>
      </form>
      <ErrorMessage message={errorMessage} />
    </div>
  );
}
