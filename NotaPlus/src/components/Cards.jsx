

import { useNavigate } from "react-router-dom"


export const Cards = (params) => {
  const {img,title,href,alt} = params
  return (
    <div className="flex flex-col w-[136px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg items-center p-2 border-solid border-[#f1f1f1] shadow-lg shadow-black">
        <div><img className="h-[35px]" src={img} alt={alt} /></div>
        <h3 className="text-black text-wrap text-center ease-in-out duration-300 hover:uppercase" ><a href={href}>{title}</a></h3>
    </div>
  )
}

export const CardSubject = (params) => {
    const {id, studentId,img,title,alt,grupo} = params
    
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate(`/student/${studentId}/evaluations/${id}`);
    };


  return (
    
    <div  onClick={handleClick} className="flex flex-col w-[145px] h-[145px) bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg items-center p-3 border border-solid border-yellowGreen shadow-lg shadow-black" >
        <div><img className="h-[72px] w-[130px]" src={img} alt={alt} /></div>
        
          <h3 className="text-yellowGreen font-bold text-wrap text-center ease-in-out duration-300 hover:uppercase" >{title}</h3>
        
        <h4 className="text-white ">{grupo}</h4>
    </div>
    
  )
}