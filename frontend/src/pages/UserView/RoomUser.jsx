import UserRoom from "../../components/UserRoom";

const RoomUser = () => {
  return (
    <div>
      <h2 className="text-red-500 text-center text-3xl pt-4">
        Movie Name - The Nun
      </h2>
      <h2 className="text-2xl text-red-300 text-center font-bold pt-4">
        Choose Cinema
      </h2>
      <UserRoom />
    </div>
  );
};

export default RoomUser;
