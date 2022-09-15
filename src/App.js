import LoginPage from "./Pages/Loginpage";
import StudentPage from "./Pages/StudentPage";
import TeacherPage from "./Pages/TeacherPage";
import AdminPage from "./Pages/AdminPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/TeacherPage" element={<TeacherPage/>} />
          <Route path="/StudentPage" element={<StudentPage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/AdminPage" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
