import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../CourseCard";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { colors } from "../../colors/colors";
import QuizIcon from '@mui/icons-material/Quiz';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

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
    <div dir="rtl" style={{ width: '100%' }}>
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

const Degrees = () => {
  const apiToken = "123";
  const { courses } = useContext(CourseContext)
  console.log(courses);
  const questionData = [
    { id: 1, status: 'correct', answer: 'B' },
    { id: 2, status: 'wrong', answer: 'A' },
    { id: 3, status: 'correct', answer: 'C' },
    { id: 4, status: 'correct', answer: 'A' },
    { id: 5, status: 'correct', answer: 'D' },
    { id: 7, status: 'correct', answer: 'A' },
    { id: 8, status: 'wrong', answer: 'A' },
    { id: 9, status: 'correct', answer: 'B' },
    { id: 10, status: 'correct', answer: 'B' },
    { id: 11, status: 'correct', answer: 'C' },
    { id: 12, status: 'correct', answer: 'D' },
  ];

  const completed = 65;
  const progress = 35;
  return (
    <>
      <Grid container gap={2}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} apiToken={apiToken} />
        ))}

        <Box sx={{ p: 2, borderRadius: '8px', boxShadow: 1, bgcolor: 'white', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography sx={{ paddingRight: '5px', fontWeight: 'bold', color: colors.lightBlue }}>الأختبار 1</Typography>
              <QuizIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
            </Box>
            <Box>
              <Progress />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <ArrowBackIosNewIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
              <Typography sx={{ fontWeight: 'bold', color: colors.lightBlue }}>الأجابات</Typography>
            </Box>
          <Box sx={{ mt: 2, overflowY: 'auto', maxHeight: '300px', width: '100%' }}>
            {questionData.map((question) => (
              <Grid container spacing={2} key={question.id} alignItems="center" sx={{ padding: '16px' }}>
                <Grid item xs={4} sx={{ padding: '0px !important', justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}>
                  {question.status === 'correct' ? (
                    <CheckCircleIcon sx={{ color: '#4caf50' }} />
                  ) : (
                    <CancelIcon sx={{ color: '#f44336' }} />
                  )}
                </Grid>
                <Grid item xs={4} sx={{ padding: '0px !important' }}>
                  <Typography variant="body1" sx={{ color: '#fff', bgcolor: colors.lightBlue, borderRadius: '50%', width: '30px', textAlign: 'center', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {question.answer}
                  </Typography>
                </Grid>
                <Grid item xs={4} sx={{ padding: '0px !important', justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ color: '#666' }}>السؤال {question.id}</Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>


        <Box sx={{ width: '100%', border: `1px solid ${colors.border}`, padding: '20px', borderRadius: '20px', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography sx={{ paddingRight: '5px', fontWeight: 'bold', color: colors.lightBlue }}>الأختبار 1</Typography>
            <QuizIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
          </Box>
          <Box>
            <Progress />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <ArrowBackIosNewIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
            <Typography sx={{ fontWeight: 'bold', color: colors.lightBlue }}>الأجابات</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', border: `1px solid ${colors.border}`, padding: '20px', borderRadius: '20px', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography sx={{ paddingRight: '5px', fontWeight: 'bold', color: colors.lightBlue }}>الأختبار 1</Typography>
            <QuizIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
          </Box>
          <Box>
            <Progress />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <ArrowBackIosNewIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
            <Typography sx={{ fontWeight: 'bold', color: colors.lightBlue }}>الأجابات</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', border: `1px solid ${colors.border}`, padding: '20px', borderRadius: '20px', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography sx={{ paddingRight: '5px', fontWeight: 'bold', color: colors.lightBlue }}>الأختبار 1</Typography>
            <QuizIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
          </Box>
          <Box>
            <Progress />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <ArrowBackIosNewIcon sx={{ fontWeight: 'bold', color: colors.lightBlue }} />
            <Typography sx={{ fontWeight: 'bold', color: colors.lightBlue }}>الأجابات</Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Degrees;
