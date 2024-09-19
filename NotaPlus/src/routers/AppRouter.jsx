import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Student from "../page/Student";
import SubjectEvaluations from "../page/SubjectEvaluations";
import Parents from "../page/Parents";
import Teacher from "../page/Teacher";
import SubjectInfo from "../page/SubjectInfo";
import Mensajes from "../page/Mensajes";
import Perfil from "../page/Perfil";
import EditarPerfil from "../page/EditarPerfil";
import Subject from "../page/Subject";
import Tests from "../page/Tests";
import PoliticaPrivacidad from "../page/PoliticaPrivacidad";
import RegainAccess from "../page/regainaccess";
import NewActivity from "../page/Activities";



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
          <Route path="/teacher/:userId/subjects" element={<Subject />} />
          <Route path="/teacher/:userId/subjects/:subjectId" element={<SubjectInfo/>} />
          <Route path="/teacher/:userId/activities" element={<NewActivity />} />
          <Route path="/teacher/:userId/messages" element={<Mensajes />} />
          <Route path="/teacher/:userId/tests" element={<Tests/>} />
          
            
        {/* Ruta dinámica profile y edit profile*/}  
          <Route path="/profile/:userId" element={<Perfil />} />
          <Route path="/profile/:userId/editprofile" element={<EditarPerfil />} />



          <Route path="/messages/:userId" element={<Mensajes />} />
          <Route path="/regainaccess" element={<RegainAccess/>}/> 
        
          
          
          
        </Routes>
      </div>
    </>
  );
}

export default AppRouter;
