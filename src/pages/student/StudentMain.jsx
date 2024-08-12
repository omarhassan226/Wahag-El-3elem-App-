import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Header from "../../components/Header";
import AbilitiesCards from "../../components/AbilitiesCards";
import { Container } from "@mui/material";

const Card = ({ course, apiToken }) => {

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get(
          `https://wagag-elalm-backend.fliicker.com/api/instructor/show-rate/${course.teacher?.id}?api_token=${apiToken}`
        );

        setRating(parseFloat(response.data.averageRating));
      } catch (error) {
        console.error("Error fetching instructor rating:", error);
      }
    };

    fetchRating();
  }, [course.teacher?.id, apiToken]);

  return (
    <div className="w-[325px] border-[1px] border-solid border-[#3C7098] p-5 rounded-2xl flex flex-col">
      <div className="flex justify-end items-start gap-5">
        <div dir="rtl">
          <p className="text-2xl font-semibold">{course.teacher?.name}</p>
          <Rating
            name="text-feedback"
            size="small"
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
        </div>
        <img src={course.teacher?.image} alt={course?.name} />
      </div>
      <div className="flex flex-row-reverse items-center justify-between ">
        <div>
          <p dir="rtl" className="font-semibold text-[#3C7098] text-3xl">
            {course.course_name}
          </p>
          <p className="text-[#00000080]" dir="rtl">
            {course.lessons} دروس
          </p>
          <p className="text-[#00000080]" dir="rtl">
            {course.duration} ساعة
          </p>
        </div>
        <div className="mt-5 flex justify-center items-center relative">
          <CircularProgressbar
            value={course.progress}
            strokeWidth={10}
            styles={{
              root: { width: 100, textAlign: "center" },
              path: { stroke: "#3C7098" },
              trail: { stroke: "#d6d6d6" },
              text: { fontSize: "20px", fill: "#3C7098" },
            }}
          />
          <p className="abcenter text-2xl text-[#3C7098]">{course.progress}%</p>
        </div>
      </div>
    </div>
  );
};

const StudentMain = () => {
  const [courses, setCourses] = useState([]);
  const apiToken = "123";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `https://wagag-elalm-backend.fliicker.com/api/unknow/courses?api_token=${apiToken}`
        );

        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Container sx={{maxWidth:'1500px !important'}}>
      <div>
        <Header text="مرحبا بك في منصة وهج التعليمية" />
        <p className="text-[#00000080] mt-2 " dir="rtl">
          اختر الكورس المناسب واستمتع برحله تعليمية مميزه
        </p>
        <div className="flex justify-end py-5 gap-5">
          <p className="py-2 px-5 bg-[#3C70981A] w-fit rounded-full cursor-pointer">
            الجامعات
          </p>
          <p className="py-2 px-5 bg-[#3C70981A] w-fit rounded-full cursor-pointer">
            الثانوية العامة
          </p>
        </div>
        <div className="">
          <AbilitiesCards />
        </div>
        <div className="flex flex-col items-end ">
          <p className="text-3xl font-semibold">الكورسات المسجلة</p>
          <div className="flex flex-wrap justify-end items-center gap-5 mt-5">
            {courses.map((course) => (
              <Card key={course.id} course={course} apiToken={apiToken} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StudentMain;
