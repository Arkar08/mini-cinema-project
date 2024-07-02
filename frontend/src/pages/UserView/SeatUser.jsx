import SeatChair from "../../components/SeatChair";
import SeatScreen from "../../components/SeatScreen";
import ProcessedUser from "./ProcessedUser";

const SeatUser = () => {
  return (
    <div>
      <h2 className="text-red-500 text-center text-xl pt-4">
        Movie Name - The Nun
      </h2>
      <h2 className="text-red-500 text-center text-xl pt-4">
        Cinema Name - Mingalar Cinema Hall(3)
      </h2>
      <SeatScreen />
      <SeatChair />
      <ProcessedUser />
    </div>
  );
};

export default SeatUser;
