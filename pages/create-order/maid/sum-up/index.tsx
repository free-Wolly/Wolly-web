import { useRouter } from "next/router";
import { parseISO } from "date-fns";
import { useEffect } from "react";
import { ifNoDataRedirect } from "../../helpers/functions";
import Section from "../../helpers/components/SumUpSection";

export default function SumUp() {
  const router = useRouter();
  const data: any = router.query;
  const startTime = parseISO(data.startTime).toString();

  useEffect(() => {
    ifNoDataRedirect(data, router, "maid");
  }, [data, router]);

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    router.push({ pathname: "finish-order", query: data });
  };

  return (
    <div>
      <div>Sum Up</div>
      <div className="flex flex-col gap-[1rem]">
        <Section title="სერვისის ტიპი" text={"დამხმარე დიასახლისი"} />
        <Section title="დამხმარე დიასახლისის რაოდენობა" text={data.quantity} />
        <Section title="ხანგრძლივობა" text={`${data.hours} საათი`} />
        <Section title="დაწყების დრო" text={startTime} />
      </div>
      <button onClick={handleClick}>გაგრძელება</button>
    </div>
  );
}
