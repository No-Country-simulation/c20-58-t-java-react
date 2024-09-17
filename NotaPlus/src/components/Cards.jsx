

import { useNavigate } from "react-router-dom"

//para home teachers
export const Cards = (params) => {
  const {img,title,alt,userId,sub} = params
  const navigate =useNavigate();

  const handleClick = () => {
    navigate(`/teacher/${userId}/${sub}`);
  };

  return (
    <div onClick={handleClick} className="flex flex-col w-[150px] bg-white rounded-lg items-center p-2 border border-green-700 shadow-lg shadow-black">
        <div><img className="h-[72px]" src={img} alt={alt} /></div>
        <h3 className="text-azulClaroBase text-[18px] text-wrap text-center ease-in-out duration-500 hover:uppercase font-bold" >{title}</h3>
    </div>
  )
}//fin Cards
//para home students
export const CardSubject = (params) => {
    const {id, studentId,img,title,alt,grupo} = params
    
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate(`/student/${studentId}/evaluations/${id}`);
    };


  return (
    
    <div  onClick={handleClick} className="flex flex-col w-[145px] h-[145px) bg-white rounded-lg items-center p-3 border border-solid border-yellowGreen shadow-lg shadow-black" >
        <div><img className="h-[72px] w-[130px]" src={img} alt={alt} /></div>
        
          <h3 className="text-azulClaroBase font-bold text-wrap text-center ease-in-out duration-500 hover:uppercase" >{title}</h3>
        
        <h4 className="text-white ">{grupo}</h4>
    </div>
    
  )
}//finCardSubject
//para home parents
export const CardStudent = (params) => {
  const {studentId,img,title,alt,grupo} = params
  
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/student/${studentId}`);
  };


return (
  
  <div  onClick={handleClick} className="flex flex-col w-[145px] h-[145px) bg-white rounded-lg items-center p-3 border border-solid border-yellowGreen shadow-lg shadow-black" >
      <div><img className="h-[72px] w-[130px]" src={img} alt={alt} /></div>
      
        <h3 className="text-azulClaroBase text-[20px] font-bold text-wrap text-center ease-in-out duration-500 hover:uppercase" >{title}</h3>
      
      <h4 className="text-white ">{grupo}</h4>
  </div>
  
)
}//fin CardStudent

export const CardsSubjectInfo = (params) => {
  const { img, alt, userId, subjectId } = params;
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/teacher/${userId}/subjects/${subjectId}`);
  };
  
  return (
    <div  onClick={handleClick}>
      <img  className="w-[10rem]" src={img} alt={alt} />
    </div>
  );
};//Fin CardsSubjectInfo