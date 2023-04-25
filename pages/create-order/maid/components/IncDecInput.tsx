const IncDecInput = ({
  min,
  max,
  text,
  value,
  onDec,
  onInc,
}: {
  min: number;
  max: number;
  text: string;
  value: number;
  onDec: any;
  onInc: any;
}) => {
  return (
    <div className="flex w-[25rem] justify-between border-b-[2px]">
      <div className="flex gap-[1rem] items-center font-bold text-[1.5rem]">
        <button
          onClick={(e) => {
            e.preventDefault();
            value > min && onDec();
          }}
        >
          -
        </button>
      </div>
      <div>
        {value} {text}
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            value < max && onInc();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default IncDecInput;
