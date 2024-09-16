import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button1 from "../components/Button1";
import Footer from "../components/Footer";
import logo from "../asset/notaPlusLogo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

console.log(errors);
  const [authError, setAuthError] = useState('');
  const navigate =useNavigate();


  // es solo para probar validación y autenticación, Se debe conectar a base de datos o api
const users = [
  {userId:'23789456', password:'Pa23789456',role:'parents', name:'Jane', lastname:'Doe'},
  {userId:'34675123', password:'Es34675123',role:'student', name:'John', lastname:'Doe'},
  {userId:'5341078', password:'Te5341078',role:'teacher', name:'Sophia', lastname:'Rose'},
  {userId:'32555124', password:'Es32555124',role:'student', name:'Emily', lastname:'Smith'},
  {userId:'33225146', password:'Es33225146',role:'student', name:'David', lastname:'Lee'},
]


  

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    
    const user= users.find(user =>user.userId === data.userId && user.password===data.password);
    if(user){
      switch(user.role){
        case 'student':
          navigate(`/student/${user.userId}`);
          break;
        case 'teacher':
          navigate(`/teacher/${user.userId}`);
          break;
        case 'parents':
          navigate(`/parent/${user.userId}`)    
          break;
        default:
          setAuthError('Rol no encontrado');
      }
    }else{
      setAuthError('Usuario o contraseña incorrectos')
    }
    reset();
  });

  return (
    <section className="flex flex-col content-center max-h-[100vh] place-content-center">
      <div className="flex flex-col lg:max-xl:w-[95%] md:self-center  md:border-blue-400 md:border-2 p-[2rem] rounded-md bg-[#0d0f3f] ">
        <img
          src={logo}
          alt="logoNotaPlus"
          className="flex self-center w-[50%] relative sm:bottom-[3rem] md:bottom-[0rem]"
        />
        <form onSubmit={onSubmit} className="flex flex-col">
          <label htmlFor="userId" className="text-white ">
            ID
          </label>
          <input
            type="text"
            className="max-sm:bg-transparent max-sm:border-white max-sm:border-b-2 p-[.5rem] max-sm:text-white max-sm:outline-none md:text-[1.5rem] md:rounded-[.5rem]"
            autoFocus
            {...register("userId", {
              required: {
                value: true,
                message: "Este campo debe completarse",
              },
            })}
          />
          {errors.userId && (
            <span className="block mb-4 font-bold text-s text-red-600">
              {errors.userId.message}
            </span>
          )}

          <div className=" relative flex flex-col">
            <label htmlFor="password" className="text-white mt-[1rem]">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"} 
              className="max-sm:bg-transparent max-sm:border-white max-sm:border-b-2 p-[.5rem] max-sm:text-white max-sm:outline-none md:text-[1.5rem] md:rounded-[.5rem]"
              {...register("password", {
                required:{
                  value:true,
                  message: "Debe escribir una contraseña"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    "La contraseña debe tener un mínimo de 8 caracteres, una letra minúscula, una mayúscula y un número",
                },
              })}
            />
            {errors.password && (
              <span className="block mb-4 font-bold text-s text-red-600">
                {errors.password.message}
              </span>
            )}
            <span onClick={togglePasswordVisibility} className="absolute right-2 top-14 cursor-pointer text-gray-500">
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </span>


            {/* <span className="flex justify-end items-end">
                <img
                    onClick={() => {
                      console.log("Tilin");
                    }}
                    className="max-sm:text-white absolute mb-[1rem] md:pr-[.5rem] cursor-pointer"
                  >
                    icono
                </img>
            </span> */}









          </div>

          <p className="text-white mt-[1rem]">
            ¿Olvidaste tu{" "}
            <a href="#" className="text-blue-600 ">
              contraseña?
            </a>{" "}
          </p>


          <Button1
            typeBtn="submit"
            text="Ingresar"/>

          {/* <button
            className="flex w-[100%] justify-center p-[1.2rem] bg-[#2C45F8] 
          rounded-[.7rem] text-white text-[1.4rem] mt-[1.5rem]"
          >
            Ingresar
          </button> */}

          {authError &&  (
              <span className="block mb-4 text-s text-red-600">
                {authError}
              </span>
            )}
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default Login;
