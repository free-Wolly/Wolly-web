import { useReducer, useState } from "react";
import reducer from "./helpers/reducer";
import InputWithValidation from "../../../components/Helpers/InputWithValidation";
import ErrorMessage from "../../../components/Helpers/ErrorMessage";
import { useRouter } from "next/router";

export default function SwimmingPool() {
  const [formData, setFormData] = useState({
    squareMeter: "",
    poolType: "",
  });

  const [validationMessage, setValidationMessage] = useReducer(reducer, {
    empty: "",
  });
  const handleChange = (e: React.ChangeEvent<any>, field: string) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const router = useRouter();

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setValidationMessage({ type: "notEmptyInput" });
    if (!!!formData.squareMeter || !!!formData.poolType) {
      setValidationMessage({ type: "emptyInput" });
    } else {
      router.push({
        pathname: "swimming-pool/select-date",
        query: formData,
      });
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
          შემდეგი
        </button>
        <ErrorMessage message={validationMessage.empty} />
      </form>
    </div>
  );
}
