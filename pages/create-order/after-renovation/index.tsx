import { useReducer, useState } from "react";
import IncDecInput from "./components/IncDecInput";
import CheckboxInput from "./components/CheckboxInput";
import reducer from "./helpers/reducer";
import ErrorMessage from "../../../components/Helpers/ErrorMessage";
import { useRouter } from "next/router";

export default function AfterRenovation() {
  const [formData, setFormData] = useState({
    area: "",
    balconyArea: "",
    bathroom: 0,
    bedroom: 0,
    cabinet: 0,
    kitchen: 0,
    livingRoom: 0,
    studio: 0,
    premiumLiquids: false,
    serviceType: "AFTER_RENOVATION",
    cleanersQuantity: 5,
    duration: 8,
  });

  const [validationMessage, setValidationMessage] = useReducer(reducer, {
    area: "",
    rooms: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<any>, field: string) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

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
        pathname: "after-renovation/select-pack",
        query: formData,
      });
    }
  };

  return (
    <div>
      <div>After Renovation</div>
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
            text="სააბაზანო"
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
            text="საძინებელი"
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
            text="სტუდიო"
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
            text="მისაღები"
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
            text="სამზარეულო"
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
            text="კაბინეტი"
            value={formData.cabinet}
            onDec={() =>
              setFormData({ ...formData, cabinet: formData.cabinet - 1 })
            }
            onInc={() =>
              setFormData({ ...formData, cabinet: formData.cabinet + 1 })
            }
            setValidationMessage={setValidationMessage}
          />

          <div>პროდუქტები</div>

          <CheckboxInput
            text="ეკო ხსნარები"
            onChange={() => {
              setFormData({
                ...formData,
                premiumLiquids: !formData.premiumLiquids,
              });
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
