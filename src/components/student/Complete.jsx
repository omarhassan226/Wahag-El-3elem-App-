import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../CourseCard";
import { Grid } from "@mui/material";

const Complete = () => {
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
  }, [apiToken]);

  return (
    <Grid container gap={1.5}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} complete={true} apiToken={apiToken} />
      ))}
    </Grid>
  );
};

export default Complete;

