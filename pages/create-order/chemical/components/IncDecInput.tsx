const IncDecInput = ({
  furniture,
  value,
  onDec,
  onInc,
  setErrorMessage,
}: {
  furniture: string;
  value: number;
  onDec: any;
  onInc: any;
  setErrorMessage: any;
}) => {
  return (
    <div className="flex w-[25rem] justify-between border-b-[2px]">
      <div>{furniture}</div>
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
            value === 0 && setErrorMessage("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default IncDecInput;
