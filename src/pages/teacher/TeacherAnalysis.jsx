import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header";

const TeacherAnalysis = () => {
  return (
    <div>
      <Header text={"الاحصائيات"} />
      <div className="flex px-5 pt-7 pb-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-1/2 text-center bg-[#3C7098] text-white py-2 rounded-l-full rounded-bl-full  font-semibold"
              : "w-1/2 text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-l-full rounded-bl-full font-semibold"
          }
          to="sells"
        >
          المبيعات
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-1/2 text-center bg-[#3C7098] text-white py-2 rounded-r-full rounded-br-full font-semibold"
              : "w-1/2 text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-r-full rounded-br-full font-semibold"
          }
          to="courses"
        >
          الكورسات
        </NavLink>
      </div>
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherAnalysis;
