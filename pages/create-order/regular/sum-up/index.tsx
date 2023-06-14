import { useRouter } from "next/router";
import { parseISO } from "date-fns";
import { useEffect } from "react";
import { ifNoDataRedirect } from "../../../../utils/create-order/functions";
import Section from "../../helpers/components/SumUpSection";
import Rooms from "../../helpers/components/SumUpRooms";

export default function SumUp() {
  const router = useRouter();
  const data: any = router.query;
  const startTime = parseISO(data.startTime).toString();

  useEffect(() => {
    ifNoDataRedirect(data, router, "regular");
  }, [data, router]);

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    router.push({ pathname: "finish-order", query: data });
  };

  const renderAdditionalServices = () => {
    if (
      parseInt(data.curtains) > 0 ||
      parseInt(data.clothesWashing) > 0 ||
      data.wardrobe === "true" ||
      data.fridge === "true" ||
      data.oven === "true"
    ) {
      return (
        <div className="flex flex-col p-[1rem] border-[0.125rem]">
          <div className="font-bold">დამატებითი სერვისები</div>
          {parseInt(data.clothesWashing) > 0 && (
            <Rooms
              room="ტანსაცმლის რეცხვა"
              qty={`${data.clothesWashing} დოლურა`}
            />
          )}
          {parseInt(data.curtains) > 0 && (
            <Rooms
              room="ფარდების რეცხვა/დაუთოვება"
              qty={`${data.curtains} ოთახი`}
            />
          )}
          {data.wardrobe === "true" && <div>ტანსაცმლის კარადა შიგნიდან</div>}
          {data.fridge === "true" && <div>მაცივარი შიგნიდან</div>}
          {data.oven === "true" && <div>ღუმელი შიგნიდან</div>}
        </div>
      );
    }
  };

  return (
    <div>
      <div>Sum Up</div>
      <div className="flex flex-col gap-[1rem]">
        <Section
          title="სერვისის ტიპი"
          text={
            "სახლის დალაგება - " +
            (data.serviceSubType === "BASIC"
              ? "სტანდარტული"
              : data.serviceSubType === "STANDART"
              ? "პრემიუმ"
              : data.serviceSubType === "PREMIUM"
              ? "ელიტ"
              : "") +
            " პაკეტი"
          }
        />
        <Section title="საცხოვრებელი ფართი" text={`${data.area} მ2`} />
        {data.balconyArea && (
          <Section
            title="აივნის/ვერანდის ფართი"
            text={`${data.balconyArea} მ2`}
          />
        )}
        <Section title="დამლაგებლების რაოდენობა" text={data.cleanersQuantity} />
        {data.petExists && (
          <Section title="გყავთ ცხოველი სახლში?" text={"დიახ"} />
        )}

        <Section title="დაწყების დრო" text={startTime} />
        <Section title="დაახლოებითი ხანგრძლივობა" text={`${data.duration}`} />

        <div className="flex flex-col p-[1rem] border-[0.125rem]">
          <div className="font-bold">ოთახები</div>
          {data.bathroom !== "0" && (
            <Rooms room="სააბაზანო" qty={data.bathroom} />
          )}
          {data.bedroom !== "0" && (
            <Rooms room="საძინებელი" qty={data.bedroom} />
          )}
          {data.cabinet !== "0" && <Rooms room="კაბინეტი" qty={data.cabinet} />}
          {data.livingRoom !== "0" && (
            <Rooms room="მისაღები" qty={data.livingRoom} />
          )}
          {data.kitchen !== "0" && (
            <Rooms room="სამზარეულო" qty={data.kitchen} />
          )}
          {data.studio !== "0" && <Rooms room="სტუდიო" qty={data.studio} />}
        </div>
        {data.premiumLiquids === "true" && (
          <div className="flex flex-col p-[1rem] border-[0.125rem]">
            <div className="font-bold">პროდუქტები</div>
            <div>ეკო ხსნარები</div>
          </div>
        )}
        {renderAdditionalServices()}
      </div>
      <button onClick={handleClick}>გაგრძელება</button>
    </div>
  );
}
