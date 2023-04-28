const Section = ({ title, text }: any) => {
  return (
    <div className="flex flex-col p-[1rem] border-[0.125rem]">
      <div className="font-bold">{title}</div>
      <div>{text}</div>
    </div>
  );
};

export default Section;
