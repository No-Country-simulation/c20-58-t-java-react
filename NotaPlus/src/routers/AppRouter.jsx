import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";

function AppRouter() {
    return <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  </>;
}

export default AppRouter;