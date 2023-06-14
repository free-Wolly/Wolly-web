import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ErrorMessage from "../../../../components/Helpers/ErrorMessage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ifNoDataRedirect } from "../../../../utils/create-order/functions";
import {
  after10Days,
  availableSlots,
  tomorrow,
} from "../../../../constants/create-order/constants";

export default function SelectDate() {
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [startDate, setStartDate] = useState(tomorrow);
  const dateRef: any = useRef(null);
  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    ifNoDataRedirect(data, router, "chemical");
  }, [data, router]);

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!!!date) {
      setErrorMessage("აირჩიეთ სასურველი თარიღი");
    } else {
      router.push({
        pathname: "sum-up",
        query: { ...router.query, startTime: date },
      });
    }
  };

  return (
    <div>
      <div>Select Date</div>
      <DatePicker
        onChange={(date: any) => {
          setDate("");
          setStartDate(date);
          if (dateRef.current) dateRef.current.reset();
        }}
        dateFormat="yyyy-MM-dd"
        minDate={tomorrow}
        maxDate={after10Days}
        selected={startDate}
      />
      <form
        ref={dateRef}
        className="flex flex-col items-start"
        onChange={(e: React.ChangeEvent<any>) =>
          setDate(startDate.toISOString().substring(0, 10) + e.target.value)
        }
      >
        {availableSlots.map((slot, id) => {
          return (
            <div key={id}>
              <input type="radio" name="startDate" value={slot.start} />
              <label>{slot.start.substring(1, 6)}</label>
            </div>
          );
        })}
        <button
          className="mt-[1.25rem] border-[0.125rem] p-[0.5rem]"
          type="submit"
          onClick={handleClick}
        >
          შემდეგი
        </button>
        <ErrorMessage message={errorMessage} />
      </form>
    </div>
  );
}
