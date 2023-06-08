const IncDecInput = ({
  room,
  name,
  value,
  onDec,
  onInc,
  setValidationMessage,
}: {
  room: boolean;
  name: string;
  value: number;
  onDec: any;
  onInc: any;
  setValidationMessage: any;
}) => {
  return (
    <div className="flex w-[25rem] justify-between border-b-[2px]">
      <div>{name}</div>
      <div className="flex gap-[1rem] items-center font-bold text-[1.5rem]">
        <button
          onClick={(e) => {
            e.preventDefault();
            value > 0 && onDec();
          }}
        >
          -
        </button>
        <div>{value}</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            value < 10 && onInc();
            room && setValidationMessage({ type: "notEmptyRooms" });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default IncDecInput;
