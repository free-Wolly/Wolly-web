import { useRouter } from "next/router";
import { parseISO } from "date-fns";
import { useEffect } from "react";
import { ifNoDataRedirect } from "../../../../utils/create-order/functions";
import Section from "../../helpers/components/SumUpSection";

const Furniture = ({ text, qty }: { text: string; qty: string }) => {
  return (
    <div className="flex justify-between">
      <div>{text}</div>
      <div>{qty}</div>
    </div>
  );
};

export default function SumUp() {
  const router = useRouter();
  const data: any = router.query;
  const startTime = parseISO(data.startTime).toString();

  useEffect(() => {
    ifNoDataRedirect(data, router, "chemical");
  }, [data, router]);

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    router.push({ pathname: "finish-order", query: data });
  };

  return (
    <div>
      <div>Sum Up</div>
      <div className="flex flex-col gap-[1rem]">
        <Section title="სერვისის ტიპი" text={"ქიმიური წმენდა"} />
        <Section title="დაწყების დრო" text={startTime} />
        <div className="border-[2px] p-[1rem] w-[50%] flex flex-col gap-[0.3rem]">
          <div className="flex justify-between">
            <div className="font-bold">ერთეულები</div>
            <div>რაოდენობა</div>
          </div>

          {data.softChair !== "0" && (
            <Furniture text="რბილი სკამი" qty={data.softChair} />
          )}
          {data.armchair !== "0" && (
            <Furniture text="სავარძელი" qty={data.armchair} />
          )}
          {data.carpet !== "0" && (
            <Furniture text="ხალიჩა/რბილი იატაკი" qty={data.carpet} />
          )}
          {data.mattress !== "0" && (
            <Furniture text="მატრასი(ორივე მხარე)" qty={data.mattress} />
          )}
          {data.twoSeaterSofa !== "0" && (
            <Furniture text="ორადგილიანი დივანი" qty={data.twoSeaterSofa} />
          )}
          {data.threeSeaterSofa !== "0" && (
            <Furniture text="სამადგილიანი დივანი" qty={data.threeSeaterSofa} />
          )}
          {data.fourSeaterSofa !== "0" && (
            <Furniture text="ოთხადგილიანი დივანი" qty={data.fourSeaterSofa} />
          )}
          {data.fiveSeaterSofa !== "0" && (
            <Furniture text="ხუთადგილიანი დივანი" qty={data.fiveSeaterSofa} />
          )}
          {data.sixSeaterSofa !== "0" && (
            <Furniture text="ექვსადგილიანი დივანი" qty={data.sixSeaterSofa} />
          )}
        </div>
      </div>

      <button onClick={handleClick}>გაგრძელება</button>
    </div>
  );
}
