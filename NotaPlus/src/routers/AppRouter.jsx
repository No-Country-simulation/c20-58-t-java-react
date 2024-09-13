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
          <Route path="/student/:studentId" element={<Student />} />
          <Route path="/student/:studentId/evaluations/:subjectId" element={<SubjectEvaluations />} />
          

          
          <Route path="/parent" element={<Parents id="523" name="Jane " lastname="Doe" role="Padre/madre"/>} />
          <Route path="/teacher" element={<Teacher id="123" name="Sophia " lastname="Rose" role="Profesor/a"/>}/>

          <Route path="/messages" element={<Mensajes />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/editprofile" element={<EditarPerfil />} />
          <Route path="/teacher/subject" element={<Subject />} />
          <Route path="/activities" element={<Activities />} />
          
        </Routes>
      </div>
    </>
  );
}

export default AppRouter;
