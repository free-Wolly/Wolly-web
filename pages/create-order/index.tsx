import Link from "next/link";

export default function CreateOrder() {
  return (
    <div>
      <div className="font-bold text-[2rem]">Create Order</div>
      <Link href={"/create-order/swimming-pool"}>
        <div className="font-bold text-[2rem] cursor-pointer">
          საცურაო აუზის წმენდა
        </div>
      </Link>
      <Link href={"/create-order/chemical"}>
        <div className="font-bold text-[2rem] cursor-pointer">
          ქიმიური წმენდა
        </div>
      </Link>
      <Link href={"/create-order/maid"}>
        <div className="font-bold text-[2rem] cursor-pointer">
          დამხმარე დიასახლისი
        </div>
      </Link>
      <Link href={"/create-order/after-renovation"}>
        <div className="font-bold text-[2rem] cursor-pointer">
          რემონტის შემდგომი დალაგება
        </div>
      </Link>
      <Link href={"/create-order/regular"}>
        <div className="font-bold text-[2rem] cursor-pointer">
          სტანდარტული დალაგება
        </div>
      </Link>
    </div>
  );
}
