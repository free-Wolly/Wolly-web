import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "../../../../components/Helpers/ErrorMessage";
import { ifNoDataRedirect } from "../../helpers/functions";

export default function SelectPack() {
  const [pack, setPack] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    ifNoDataRedirect(data, router, "regular");
  }, [data, router]);

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!!!pack) {
      setErrorMessage("აირჩიეთ სასურველი პაკეტი");
    } else {
      router.push({
        pathname: "select-date",
        query: { ...data, serviceSubType: pack },
      });
    }
  };

  return (
    <div>
      <div>Select Pack</div>
      <form>
        <select
          className="border-[2px] w-[30%] pl-[1rem]"
          onChange={(e) => setPack(e.target.value)}
          defaultValue="default"
        >
          <option value="default" disabled hidden>
            აირჩიეთ პაკეტი
          </option>
          <option value={"BASIC"}>სტანდარტული</option>
          <option value={"STANDART"}>პრემიუმი</option>
          <option value={"PREMIUM"}>ელიტი</option>
        </select>
        <button type="submit" onClick={handleClick}>
          შემდეგი
        </button>
        <ErrorMessage message={errorMessage} />
      </form>
    </div>
  );
}
