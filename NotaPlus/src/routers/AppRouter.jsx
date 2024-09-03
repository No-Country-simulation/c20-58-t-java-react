import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Student from "../page/student";
import Parents from "../page/Parents";
import Teacher from "../page/Teacher";

function AppRouter() {
    return <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/parent' element={<Parents/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
      </Routes>
    </div>
  </>;
}

export default AppRouter;