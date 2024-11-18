import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Student from "./components/Student";
import Course from "./components/Course";
import Setting from "./components/Setting";
import Login from "./components/Login";
import StudentData from "./components/StudentData";
import Enrollment from "./components/Enrollment";
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/student" element={<Student/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/setting" element ={<Setting/>}/>
          <Route path="/studentRecord" element ={<StudentData/>}/>
          <Route path="/enrollment" element ={<Enrollment/>}/>
        </Route>
        <Route path="/" element={<div>this is login out of nested</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
