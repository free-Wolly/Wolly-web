const Rooms = ({ room, qty }: any) => {
  return (
    <>
      <div className="flex w-[30%] justify-between">
        <div>{room}</div>
        <div>{qty}</div>
      </div>
    </>
  );
};
export default Rooms;
