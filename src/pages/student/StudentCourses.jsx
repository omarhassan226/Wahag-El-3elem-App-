import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect } from "react";
import { Container } from "@mui/material";

const StudentCourses = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/courses") {
      navigate("/courses/uncomplete", { replace: true });
    }
  }, []);

  return (
    <div>
      <Container sx={{maxWidth:'1500px !important'}}>

      <Header text={"الكورسات"} />
      </Container>
      <div className="flex px-5 pt-7 pb-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-1/2 text-center bg-[#3C7098] text-white py-2 rounded-l-full rounded-bl-full  font-semibold"
              : "w-1/2 text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-l-full rounded-bl-full font-semibold"
          }
          to="complete"
        >
          الكورسات المكتمله
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-1/2 text-center bg-[#3C7098] text-white py-2 rounded-r-full rounded-br-full font-semibold"
              : "w-1/2 text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-r-full rounded-br-full font-semibold"
          }
          to="uncomplete"
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

export default StudentCourses;
