import Header from "../Header";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { NavLink, Outlet } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import StudentsTest from "./StudentSessions";
import StudentsSessions from "./StudentsTests";

const Lectures = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (value) => {
    setActiveTab(value);
    console.log(value);
    
  }

  const { rating, course } = useContext(CourseContext);
  const [courseDetails, setCourseDetails] = useState({});
  const apiToken = '123';

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://wagag-elalm-backend.fliicker.com/api/unknow/courses/3?api_token=${apiToken}`
        );
        setCourseDetails(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [apiToken]);

  return (
    <div className="border-[1px] border-solid border-[#0000000D] rounded-2xl mt-5">
      <div className="grid grid-cols-2">
        <NavLink onClick={() => handleChange(1)}
          className={({ isActive }) =>
            activeTab === 1
              ? "text-center bg-[#3C7098] text-white py-2 rounded-tl-2xl font-semibold"
              : "text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-tl-2xl font-semibold"
          }
          to="sessions"
        >
          الاختبارات
        </NavLink>
        <NavLink onClick={() => handleChange(0)}
          className={({ isActive }) =>
            activeTab === 0
              ? "text-center bg-[#3C7098] text-white py-2 rounded-tr-2xl font-semibold"
              : "text-center border border-[#cfcfcf80] text-[#00000080] py-2 rounded-tr-2xl font-semibold"
          }
          to="tests"
        >
          المحاضرات
        </NavLink>
      </div>
      <div>
        {
          activeTab === 0 && <StudentsTest/>
        }
        {
          activeTab === 1 && <StudentsSessions/>
        }
      </div>
    </div>
  );
};

const Profile = () => {
  const { rating, course } = useContext(CourseContext);
  const [courseDetails, setCourseDetails] = useState({});
  const apiToken = '123';

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://wagag-elalm-backend.fliicker.com/api/unknow/courses/3?api_token=${apiToken}`
        );
        setCourseDetails(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [apiToken]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start mt-10">
      <div className="text-right" dir="rtl">
        <p className="text-2xl md:text-4xl font-semibold">{courseDetails?.teacher?.name}</p>
        <Rating
          name="text-feedback"
          value={rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <p className="font-semibold text-lg md:text-xl text-[#00000080]">
          {courseDetails?.teacher?.description}
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          className="w-[150px] md:w-[300px] rounded-full"
          src={courseDetails?.teacher?.image || "/assets/default.png"}
          alt={courseDetails?.teacher?.name}
        />
      </div>
    </div>
  );
};

const Progress = () => {
  const { rating, course } = useContext(CourseContext);
  const [courseDetails, setCourseDetails] = useState({});
  const apiToken = '123';

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://wagag-elalm-backend.fliicker.com/api/unknow/courses/3?api_token=${apiToken}`
        );
        setCourseDetails(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [apiToken]);

  const completionPercentage = 75;
  return (
    <div dir="rtl">
      <p className="text-2xl text-[#00000080]">المتبقي من الكورس</p>
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-[#d6d6d6]">
          <div
            style={{ width: `${completionPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#22AD75]"
          ></div>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <span className="text-lg font-semibold text-[#22AD75]">
            مكتمل: {completionPercentage}%
          </span>
          <span className="text-lg font-semibold text-[#22AD75]">
            {100 - completionPercentage}% متبقي
          </span>
        </div>
      </div>
    </div>
  );
};

const CourseDetails = () => {
  return (
    <div className="px-5">
      <Header text="كورس القدرات" />
      <Profile />
      <div className="border-[1px] border-solid border-[#0000000D] p-5 rounded-2xl mt-5">
        <Progress />
        <div dir="rtl" className="grid grid-cols-2 gap-2 text-[#00000080] text-lg mt-4">
          <div className="text-center border-[1px] border-solid border-[#0000000D] rounded-full py-1">
            4/29/2024
          </div>
          <div className="text-center border-[1px] border-solid border-[#0000000D] rounded-full py-1">
            4/29/2024
          </div>
        </div>
        <div dir="rtl" className="bg-[#0000000D] mt-4 w-full rounded-full py-1 text-center font-semibold text-lg text-[#00000080]">
          2 من الاسابيع
        </div>
        <div dir="rtl" className="bg-[#0000000D] mt-4 w-full rounded-full py-1 text-center font-semibold text-lg text-[#00000080]">
          الايام
        </div>
      </div>
      <Lectures />
    </div>
  );
};

export default CourseDetails;
