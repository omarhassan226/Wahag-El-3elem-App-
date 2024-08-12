import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { Grid } from "@mui/material";

const CourseCard = ({ course, complete, apiToken }) => {
  const navigate = useNavigate()
  const color = complete ? "#23AD77" : "#3C7098";
  const [rating, setRating] = useState(0);

  const handleNavigate = () => {
    navigate(`/app/student/courses/${course?.id}`)
  }


  useEffect(() => {
    const fetchRating = async () => {
      try {
        if (course?.teacher?.id) {
          const response = await axios.get(
            `https://wagag-elalm-backend.fliicker.com/api/instructor/show-rate/${course.teacher.id}?api_token=${apiToken}`
          );
          setRating(parseFloat(response.data.averageRating));
        }
      } catch (error) {
        console.error("Error fetching instructor rating:", error);
      }
    };

    fetchRating();
  }, [course?.teacher?.id, apiToken]);

  return (
      <Grid onClick={handleNavigate} item md={5.9} xs={12} sx={{display:'flex', cursor:'pointer'}}  dir="rtl" className=" border-[1px] border-solid p-5 rounded-2xl" >
        <div className="flex  items-start gap-5" style={{width:'100%', direction:'ltr', justifyContent:'flex-end'}}>
          <div dir="rtl">
            <p className="text-2xl font-semibold">{course?.teacher?.name}</p>
            <Rating
              name="text-feedback"
              size="small"
              value={rating}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <div className="mt-10">
              <p dir="rtl" className="font-semibold text-2xl" style={{ color }}>
                {course?.course_name}
              </p>
              <p className="text-[#00000080] -mt-2" dir="rtl">
                {course?.lessons} دروس
              </p>
              <p className="text-[#00000080] -mt-2" dir="rtl">
                {course?.duration} ساعة
              </p>
            </div>
          </div>
          <img className="w-40" style={{height:'100%'}} src={course?.teacher?.image} alt={course?.name} />
        </div>
        <div className="mt-5 flex  items-center relative">
          <CircularProgressbar
            value={course?.progress}
            strokeWidth={10}
            styles={{
              root: { width: '100%', textAlign: "center" },
              path: { stroke: color },
              trail: { stroke: "#d6d6d6" },
              text: { fontSize: "20px", fill: color },
            }}
          />
          <p className="abcenter text-2xl" style={{ color }}>
            {course?.progress}%
          </p>
        </div>
      </Grid>
  );
};

export default CourseCard;
