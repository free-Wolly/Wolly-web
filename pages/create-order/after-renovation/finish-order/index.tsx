import request from "graphql-request";
import { useMutation, useQuery } from "react-query";
import { endpoint } from "../../../../constants/signUp/constants";
import getAllAdressesQuery from "../../../../graphql/query/getAllAdresses";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import createSimpleOrderMutation from "../../../../graphql/mutation/createSimpleOrder";
import ErrorMessage from "../../../../components/Helpers/ErrorMessage";
import Cookies from "js-cookie";
import Link from "next/link";
import {
  checkIfExists,
  ifNoDataRedirect,
} from "../../../../utils/create-order/functions";

export default function FinishOrder() {
  const [addressId, setAddressId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [notSigned, setNotSigned] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userAddresses, setUserAddresses] = useState([]);

  const router = useRouter();
  const data: any = router.query;

  useEffect(() => {
    ifNoDataRedirect(data, router, "after-renovation");
  }, [data, router]);

  const header: any = { Authorization: Cookies.get("token") };

  useQuery("getAllAddresses", () =>
    header.Authorization
      ? request(endpoint, getAllAdressesQuery, {}, header).then(
          (addressIds: any) => {
            if (addressIds?.getAllAddresses[0]) {
              setAddressId(addressIds?.getAllAddresses[0].id);
              setUserAddresses(addressIds?.getAllAddresses);
            }
            setNotSigned(false);
          }
        )
      : setNotSigned(true)
  );

  const renderAddresses = () => {
    if (userAddresses.length > 0) {
      return userAddresses?.map((address: any, id: number) => {
        return (
          <div key={id}>
            <input
              type="radio"
              name="address"
              value={address.id}
              defaultChecked={id === 0 && true}
            />
            <label>{address.street}</label>
          </div>
        );
      });
    } else {
      return (
        <div>
          გთხოვთ დაამატოთ მისამართი{" "}
          <Link className="text-blue-900" href={"/create-address"}>
            აქედან
          </Link>
        </div>
      );
    }
  };

  const createSimpleOrderVariables = {
    data: {
      serviceType: data.serviceType,
      serviceSubType: data.serviceSubType,
      price: 100,
      startTime: data.startTime,
      endTime: "2024-11-27T18:00:00.000Z",
      duration: 8,
      paymentMethod,
      addressId,
      cleanersQuantity: parseInt(data.cleanersQuantity),
      apartmentCleaning: {
        area: parseInt(data.area),
        balconyArea: checkIfExists(data.balconyArea),
        bathroom: checkIfExists(data.bathroom),
        bedroom: checkIfExists(data.bedroom),
        cabinet: checkIfExists(data.cabinet),
        kitchen: checkIfExists(data.kitchen),
        livingRoom: checkIfExists(data.livingRoom),
        studio: checkIfExists(data.studio),
        premiumLiquids: checkIfExists(data.premiumLiquids),
      },
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
    setErrorMessage("");
    createSimpleOrder.mutate();
  };

  return (
    <div>
      <div>Finish Order</div>
      <div>მისამართი</div>
      {!notSigned ? (
        <form
          onChange={(e: React.ChangeEvent<any>) => setAddressId(e.target.value)}
        >
          {renderAddresses()}
        </form>
      ) : (
        <div>
          გთხოვთ გაიაროთ რეგისტრაცია{" "}
          <Link className="text-blue-900" href={"/signup"}>
            აქედან
          </Link>
        </div>
      )}
      <div>აირჩიეთ გადახდის მეთოდი</div>
      <div className="flex flex-col">
        <form
          onChange={(e: React.ChangeEvent<any>) =>
            setPaymentMethod(e.target.value)
          }
          defaultValue={"CASH"}
        >
          <div>
            <input type="radio" value={"CASH"} name="payment" defaultChecked />
            <label>ნაღდი ანგარიშსწორებით</label>
          </div>
          <div>
            <input type="radio" value={"CREDIT_CARD"} name="payment" />
            <label>ბარათი</label>
          </div>
        </form>
      </div>
      <button
        type="submit"
        onClick={handleClick}
        disabled={notSigned || userAddresses.length < 1}
      >
        შეკვეთა
      </button>
      <ErrorMessage message={errorMessage} />
    </div>
  );
}
