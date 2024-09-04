import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";

function AppRouter() {
    return <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  </>;
}

export default AppRouter;