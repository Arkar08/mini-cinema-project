import UserCard from "../../components/UserCard";
import UserComing from "../../components/UserComing";

const HomeUser = () => {
  return (
    <div className="p-8 ">
      <div>
        <h2 className="text-2xl text-red-500 font-bold">Now Showing</h2>
        <UserCard />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl text-red-500 font-bold">Coming Soon</h2>
        <UserComing />
      </div>
    </div>
  );
};

export default HomeUser;
