import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Student from "../page/Student";
import SubjectEvaluations from "../page/SubjectEvaluations";
import Parents from "../page/Parents";
import Teacher from "../page/Teacher";
import Mensajes from "../page/Mensajes";
import Perfil from "../page/Perfil";
import EditarPerfil from "../page/EditarPerfil";
import Subject from "../page/Subject";
import Activities from "../page/Activities";
import PoliticaPrivacidad from "../page/PoliticaPrivacidad";



function AppRouter() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/politica" element={<PoliticaPrivacidad />} />
          
        {/* Ruta dinámica de student y sus subrutas */}
          <Route path="/student/:userId" element={<Student />} />
          <Route path="/student/:userId/evaluations/:subjectId" element={<SubjectEvaluations /> } />
          
        {/* Ruta dinámica de parents y sus subrutas */}
          <Route path="/parent/:userId" element={<Parents /> } />
          
        {/* Ruta dinámica de teacher y sus subrutas */}  
          <Route path="/teacher/:userId" element={<Teacher />}/>
          <Route path="/teacher/:userId/subject" element={<Subject />} />
          <Route path="/teacher/:userId/subject/:subjectId" element="" />{/* falta hacer */}
          <Route path="/teacher/:userId/activities" element={<Activities />} />


        {/* Ruta dinámica profile y edit profile*/}  
          <Route path="/profile/:userId" element={<Perfil />} />
          <Route path="/profile/:userId/editprofile" element={<EditarPerfil />} />



          <Route path="/messages/:userId" element={<Mensajes />} />

          
          
          
        </Routes>
      </div>
    </>
  );
}

export default AppRouter;
