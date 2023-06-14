const CheckboxInput = ({ text, onChange }: { text: string; onChange: any }) => {
  return (
    <div className="flex w-[25rem] justify-between border-b-[2px]">
      <div>{text}</div>
      <input type="checkbox" onChange={onChange} />
    </div>
  );
};

export default CheckboxInput;
