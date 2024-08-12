import { Route, Routes } from "react-router-dom";
import TeacherMain from "../../pages/teacher/TeacherMain";
import TeacherCourese from "../../pages/teacher/TeacherCourese";
import TeacherProfile from "../../pages/teacher/TeacherProfile";
import Teacher from "../../pages/teacher/Teacher";
import TeacherAbout from "./TeacherAbout";
import TeacherAnalysis from "../../pages/teacher/TeacherAnalysis";
import AnalysisCourese from "./AnalysisCourese";
import TeacherSells from "./TeacherSells";
const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Teacher />}>
        <Route path="main" element={<TeacherMain />} />
        <Route path="analysis" element={<TeacherAnalysis />}>
          <Route path="courses" element={<AnalysisCourese />} />
          <Route path="sells" element={<TeacherSells />} />
        </Route>
        <Route path="courses" element={<TeacherCourese />} />
        <Route path="profile" element={<TeacherProfile />}>
          <Route path="courses" element={<TeacherCourese />} />
          <Route path="about" element={<TeacherAbout />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default TeacherRoutes;
