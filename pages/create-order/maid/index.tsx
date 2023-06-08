import { useState } from "react";
import IncDecInput from "./components/IncDecInput";
import { useRouter } from "next/router";

export default function Maid() {
  const [formData, setFormData] = useState({
    quantity: 1,
    hours: 3,
  });
  const router = useRouter();

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    router.push({
      pathname: "maid/select-date",
      query: formData,
    });
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
        <button type="submit" onClick={handleClick}>
          შემდეგი
        </button>
      </form>
    </div>
  );
}
