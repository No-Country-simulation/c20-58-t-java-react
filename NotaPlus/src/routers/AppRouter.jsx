import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Student from "../page/student";
import Parents from "../page/Parents";
import Teacher from "../page/Teacher";
import Mensajes from "../page/Mensajes";


function AppRouter() {
    return <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/parent' element={<Parents/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/messages' element={<Mensajes/>}/>

      </Routes>
    </div>
  </>;
}

export default AppRouter;