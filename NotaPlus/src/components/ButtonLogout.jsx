
import { useNavigate } from "react-router-dom"


const ButtonLogout = () => {

  const navigate = useNavigate();

  const handleLogout = ()=>{
  
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-mexicanPink_logo w-[150px] h-[48px] rounded-lg  px-[16px] text-white ease-in-out duration-500 hover:bg-primaryBG ">
    Cerrar sesión
    </button>
  )

}

export default ButtonLogout