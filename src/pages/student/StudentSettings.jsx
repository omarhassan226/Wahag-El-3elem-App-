import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";

const StudentSettings = () => {
  const [student, setStudent] = useState(null);
  const apiToken = '123'; // Secure your API token
  const id = localStorage.getItem('id'); // or useParams().id if routing

  useEffect(() => {
    const fetchStudentData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://wagag-elalm-backend.fliicker.com/api/students/10?api_token=${apiToken}`
          );
          console.log(response);
          setStudent(response.data);
        } catch (error) {
          console.error("Error fetching student data:", error);
        }
      }
    };

    fetchStudentData();
  }, [id, apiToken]);

  if (!student) {
    return (
      <div className="flex justify-center items-center h-full">
        <div>Loading...</div> {/* Replace with a spinner or styled loader */}
      </div>
    );
  }

  return (
    <div className="px-5">
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-start gap-5 mt-5">
        <div className="text-center md:text-right mt-5 md:mt-10" dir="rtl">
          <p className="text-2xl md:text-4xl font-semibold">{student?.name}</p>
          <p className="font-semibold text-lg md:text-xl">
            {student?.email}
          </p>
          <button className="bg-[#3C7098] py-1 px-5 md:px-10 rounded-full text-white text-lg md:text-xl mt-3 md:mt-5">
            تعديل
          </button>
        </div>
        <img
          className="w-[150px] md:w-[300px] rounded-full"
          src={student?.image || "/assets/default.png"}
          alt={student?.name}
        />
      </div>
      <div className="border-[1px] border-solid border-[#0000000D] rounded-2xl px-5 mt-5">
        <div className="flex flex-col md:flex-row">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full md:w-1/2 text-center bg-[#3C7098] text-white py-2 rounded-tl-2xl font-semibold"
                : "w-full md:w-1/2 text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-tl-2xl font-semibold"
            }
            to="degrees"
          >
            الدرجات
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full md:w-1/2 text-center bg-[#3C7098] text-white py-2 rounded-tr-2xl font-semibold"
                : "w-full md:w-1/2 text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-tr-2xl font-semibold"
            }
            to="studnt"
          >
            الطالب
          </NavLink>
        </div>
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentSettings;
