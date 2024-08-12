import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../CourseCard";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";
import { Grid } from "@mui/material";

const Card = ({ icon, text, text2 }) => {
  return (
    <div className="w-1/3 border-[1px] border-solid p-5 rounded-2xl flex flex-col items-end gap-6">
      <img className="w-[70px]" src={icon} alt="" />
      <div className="w-full flex justify-between items-center">
        <span className="text-[#3C7098] py-1 px-4 bg-[#3C70980D] rounded-full">
          {text2}
        </span>
        <p className="text-xl font-semibold">{text}</p>
      </div>
    </div>
  );
};

const Studnt = () => {
  const apiToken = "123";
  const { courses } = useContext(CourseContext)
  console.log(courses);



  return (
    <>
      <div className="flex gap-4 px-5 mt-5">
        <Card icon="/src/assets/icon-1.png" text="الكورسات" text2={`${courses?.length} كورس`} />
        <Card icon="/src/assets/icon-2.png" text="الاجهزه المستخدمة" text2={"الهاتف المحمول"} />
        <Card icon="/src/assets/icon-3.png" text="الصف" text2={"الثالث ثانوي"} />
      </div>
      <Grid container gap={1} sx={{marginTop:'40px', justifyContent:'space-between'}}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} apiToken={apiToken} complete={course.is_completed} />
          ))}
      </Grid>
    </>
  );
};

export default Studnt;
