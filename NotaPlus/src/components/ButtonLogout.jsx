
import { useNavigate } from "react-router-dom"


const ButtonLogout = () => {

  const navigate = useNavigate();

  const handleLogout = ()=>{
  
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-yellowGreen w-[150px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-300 hover:bg-mexicanPink_logo hover:scale-90 ">
    Cerrar sesión
    </button>
  )

}

export default ButtonLogout