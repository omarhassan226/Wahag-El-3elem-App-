import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";
import RootLayout from "./root/RootLayout";

import StudentRoutes from "./components/student/StudentRoutes";
import TeacherRoutes from "./components/teacher/TeacherRoutes";
import ChoiceScreen from "./auth/ChoiceScreen";
import AbilityPageDetails from "./pages/student/AbilityPageDetails/AbilityPageDetails";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AuthLayout />}> */}
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/choice" element={<ChoiceScreen />} />
          <Route path="/signin/:type" element={<SignInForm />} />
        {/* </Route> */}
        <Route path="app" element={<RootLayout />}>
          <Route path="teacher/*" element={<TeacherRoutes />} />
          <Route path="student/*" element={<StudentRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
