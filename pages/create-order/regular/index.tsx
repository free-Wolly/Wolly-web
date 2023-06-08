import { useReducer, useState } from "react";
import IncDecInput from "./components/IncDecInput";
import CheckboxInput from "./components/CheckboxInput";
import reducer from "./helpers/reducer";
import ErrorMessage from "../../../components/Helpers/ErrorMessage";
import { useRouter } from "next/router";

export default function Regular() {
  const [formData, setFormData] = useState({
    area: "",
    balconyArea: "",
    bathroom: 0,
    bedroom: 0,
    cabinet: 0,
    clothesWashing: 0,
    curtains: 0,
    kitchen: 0,
    livingRoom: 0,
    studio: 0,
    oven: false,
    fridge: false,
    petExists: false,
    premiumLiquids: false,
    wardrobe: false,

    cleanersQuantity: 5,
    duration: 8,
  });
  const [validationMessage, setValidationMessage] = useReducer(reducer, {
    area: "",
    rooms: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<any>, field: string) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const router = useRouter();

  // const createSimpleOrderVariables = {
  //   data: {
  //     serviceType: "REGULAR_CLEANING",
  //     serviceSubType: "STANDART",
  //     price: 100,
  //     startTime: "2023-08-08T12:00:00.000Z",
  //     endTime: "2023-08-08T18:00:00.000Z",
  //     duration: 8,
  //     paymentMethod: "CASH",
  //     addressId: addressId.data?.getAllAddresses[0]?.id,
  //     apartmentCleaning: {
  //       area: parseInt(formData.area),
  //       balconyArea: checkIfExists(formData.balconyArea),
  //       bathroom: checkIfExists(formData.bathroom),
  //       bedroom: checkIfExists(formData.bedroom),
  //       cabinet: checkIfExists(formData.cabinet),
  //       clothesWashing: checkIfExists(formData.clothesWashing),
  //       curtains: checkIfExists(formData.curtains),
  //       kitchen: checkIfExists(formData.kitchen),
  //       livingRoom: checkIfExists(formData.livingRoom),
  //       studio: checkIfExists(formData.studio),
  //       wardrobe: checkIfExists(formData.wardrobe),
  //       fridge: checkIfExists(formData.fridge),
  //       oven: checkIfExists(formData.oven),
  //       petExists: formData.petExists,
  //       premiumLiquids: formData.premiumLiquids,
  //     },
  //   },
  // };

  // const createSimpleOrder = useMutation(
  //   () =>
  //     request(
  //       endpoint,
  //       createSimpleOrderMutation,
  //       createSimpleOrderVariables,
  //       header
  //     ),
  //   {
  //     onSuccess(data: any) {
  //       console.log(data);
  //     },
  //     onError(error: any) {
  //       setErrorMessage(error.response.errors[0].message);
  //     },
  //   }
  // );

  const validateArea = () => {
    let valid = true;
    if (!!!formData.area) {
      setValidationMessage({ type: "emptyArea" });
      valid = false;
    } else {
      setValidationMessage({ type: "notEmptyArea" });
    }
    return valid;
  };

  const validateRooms = () => {
    let valid = true;
    if (
      formData.bathroom === 0 &&
      formData.bedroom === 0 &&
      formData.studio === 0 &&
      formData.livingRoom === 0 &&
      formData.kitchen === 0 &&
      formData.cabinet === 0
    ) {
      setValidationMessage({ type: "emptyRooms" });
      valid = false;
    } else {
      setValidationMessage({ type: "notEmptyRooms" });
    }
    return valid;
  };

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setErrorMessage("");
    validateArea();
    validateRooms();
    if (validateArea() && validateRooms()) {
      router.push({
        pathname: "regular/select-pack",
        query: formData,
      });
      // createSimpleOrder.mutate();
    }
  };

  return (
    <div>
      <div>Regular Cleaning</div>
      <form>
        <div className="flex flex-col gap-[1rem]">
          <ErrorMessage message={validationMessage.area} />
          <input
            className="border-[2px] w-[30%] pl-[1rem]"
            type="number"
            placeholder="საცხოვრებელი - მ2"
            onChange={(e) => {
              handleChange(e, "area");
              e.target.value.length > 0 &&
                setValidationMessage({ type: "notEmptyArea" });
            }}
          />
          <input
            className="border-[2px] w-[30%] pl-[1rem]"
            type="number"
            placeholder="ვერანდა - მ2"
            onChange={(e) => handleChange(e, "balconyArea")}
          />
          <div>აირჩიეთ ოთახები</div>
          <ErrorMessage message={validationMessage.rooms} />
          <IncDecInput
            room={true}
            name="სააბაზანო"
            value={formData.bathroom}
            onDec={() =>
              setFormData({ ...formData, bathroom: formData.bathroom - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, bathroom: formData.bathroom + 1 })
            }
            setValidationMessage={setValidationMessage}
          />
          <IncDecInput
            room={true}
            name="საძინებელი"
            value={formData.bedroom}
            onDec={() =>
              setFormData({ ...formData, bedroom: formData.bedroom - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, bedroom: formData.bedroom + 1 })
            }
            setValidationMessage={setValidationMessage}
          />
          <IncDecInput
            room={true}
            name="სტუდიო"
            value={formData.studio}
            onDec={() =>
              setFormData({ ...formData, studio: formData.studio - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, studio: formData.studio + 1 })
            }
            setValidationMessage={setValidationMessage}
          />
          <IncDecInput
            room={true}
            name="მისაღები"
            value={formData.livingRoom}
            onDec={() =>
              setFormData({ ...formData, livingRoom: formData.livingRoom - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, livingRoom: formData.livingRoom + 1 })
            }
            setValidationMessage={setValidationMessage}
          />
          <IncDecInput
            room={true}
            name="სამზარეულო"
            value={formData.kitchen}
            onDec={() =>
              setFormData({ ...formData, kitchen: formData.kitchen - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, kitchen: formData.kitchen + 1 })
            }
            setValidationMessage={setValidationMessage}
          />
          <IncDecInput
            room={true}
            name="კაბინეტი"
            value={formData.cabinet}
            onDec={() =>
              setFormData({ ...formData, cabinet: formData.cabinet - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, cabinet: formData.cabinet + 1 })
            }
            setValidationMessage={setValidationMessage}
          />
          <IncDecInput
            room={false}
            name="ტანსაცმლის რეცხვა(დოლურა)"
            value={formData.clothesWashing}
            onDec={() =>
              setFormData({
                ...formData,
                clothesWashing: formData.clothesWashing - 1,
              })
            }
            onInc={() =>
              setFormData({
                ...formData,
                clothesWashing: formData.clothesWashing + 1,
              })
            }
            setValidationMessage={setValidationMessage}
          />
          <IncDecInput
            room={false}
            name="ფარდების რეცხვა/დაუთოვება(ოთახი)"
            value={formData.curtains}
            onDec={() =>
              setFormData({ ...formData, curtains: formData.curtains - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, curtains: formData.curtains + 1 })
            }
            setValidationMessage={setValidationMessage}
          />
          <div>დამატებითი სერვისები</div>
          <CheckboxInput
            text="გყავთ ცხოველი სახლში?"
            onChange={() => {
              setFormData({ ...formData, petExists: !formData.petExists });
            }}
          />
          <CheckboxInput
            text="ეკო ხსნარები"
            onChange={() => {
              setFormData({
                ...formData,
                premiumLiquids: !formData.premiumLiquids,
              });
            }}
          />
          <CheckboxInput
            text="ღუმელი შიგნიდან"
            onChange={() => {
              setFormData({ ...formData, oven: !formData.oven });
            }}
          />
          <CheckboxInput
            text="ტანსაცმლის კარადა შიგნიდან"
            onChange={() => {
              setFormData({ ...formData, wardrobe: !formData.wardrobe });
            }}
          />
          <CheckboxInput
            text="მაცივარი შიგნიდან"
            onChange={() => {
              setFormData({ ...formData, fridge: !formData.fridge });
            }}
          />
        </div>
        <ErrorMessage message={errorMessage} />
        <button type="submit" onClick={handleClick}>
          შემდეგი
        </button>
      </form>
    </div>
  );
}
