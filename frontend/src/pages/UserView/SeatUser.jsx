import SeatChair from "../../components/SeatChair";
import SeatScreen from "../../components/SeatScreen";

const SeatUser = () => {
  return (
    <div className="bg-black">
      <h2 className="text-red-500 text-center text-3xl pt-4">
        Movie Name - The Nun
      </h2>
      <SeatScreen />
      <SeatChair />
    </div>
  );
};

export default SeatUser;
