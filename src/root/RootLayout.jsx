import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex mt-16">
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="h-screen  rounded-xl pb-10 pr-10">
        <Sidebar />
      </div>
    </div>
  );
};

export default RootLayout;
