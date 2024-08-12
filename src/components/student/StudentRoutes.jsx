import { Navigate, Route, Routes } from "react-router-dom";
import StudentMain from "../../pages/student/StudentMain";
import StudentCourses from "../../pages/student/StudentCourses";
import Lecturers from "../../pages/student/Lecturers";
import Cart from "../../pages/student/Cart/Cart";
import StudentSetting from "../../pages/student/StudentSettings";
import Student from "../../pages/student/Student";
import Complete from "./Complete";
import UnComplete from "./UnComplete";
import CourseDetails from "./CourseDetails";
import StudentsTest from "./StudentSessions";
import StudentsSessions from "./StudentsTests";
import Degrees from "./Degrees";
import Studnt from "./Studnt";
import StudentsList from "../../pages/student/StudentsList";
import Abilities from "../../pages/student/Abilities";
import AbilityPageDetails from "../../pages/student/AbilityPageDetails/AbilityPageDetails";

function StudentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Student />}>
        <Route path="cart" element={<Cart />} />
        <Route path="ability/:id" element={<AbilityPageDetails />} />
        <Route path="abilities" element={<Abilities />} >
        </Route>
        <Route path="main" element={<StudentMain />} />
        <Route path="courses" element={<StudentCourses />}>
          <Route index element={<Navigate to="uncomplete" />} />
          <Route path="complete" element={<Complete />} />
          <Route path="uncomplete" element={<UnComplete />} />
        </Route>
        <Route path="courses/:courseId" element={<CourseDetails />}>
          <Route index element={<Navigate to={"sessions"} />} />
          <Route path="sessions" element={<StudentsSessions />} />
          <Route path="tests" element={<StudentsTest />} />
        </Route>
        <Route path="lecturers" element={<Lecturers />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/app/student/list" element={<StudentsList />} />
        <Route path="profile/:id" element={<StudentSetting />}>
          <Route index element={<Navigate to="studnt" />} />
          <Route path="degrees" element={<Degrees />} />
          <Route path="studnt" element={<Studnt />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default StudentRoutes;
