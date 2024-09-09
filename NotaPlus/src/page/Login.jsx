import { useForm } from "react-hook-form";

import Footer from "../components/Footer";
import logo from "../asset/notaPlusLogo.svg";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Ingresando a tu Cuenta...");
    reset();
  });

  return (
    <section className="flex flex-col content-center min-h-[100vh] place-content-center">
      <div className="flex flex-col lg:max-xl:w-[95%] md:self-center  md:border-blue-400 md:border-2 p-[2rem] rounded-md bg-[#0d0f3f] ">
        <img
          src={logo}
          alt="logoNotaPlus"
          className="flex self-center w-[50%] relative sm:bottom-[3rem] md:bottom-[0rem]"
        />
        <form onSubmit={onSubmit} className="flex flex-col">
          <label htmlFor="user" className="text-white ">
            ID
          </label>
          <input
            type="text"
            className="max-sm:bg-transparent max-sm:border-white max-sm:border-b-2 p-[.5rem] max-sm:text-white max-sm:outline-none md:text-[1.5rem] md:rounded-[.5rem]"
            autoFocus
            {...register("user", {
              required: {
                value: true,
                message: "Este campo debe completarse",
              },
            })}
          />
          {errors.user && (
            <span className="block mb-4 font-bold text-xs text-red-600">
              {errors.user.message}
            </span>
          )}

          <div className="flex flex-col">
            <label htmlFor="password" className="text-white mt-[1rem]">
              Contraseña
            </label>
            <input
              type="password"
              className="max-sm:bg-transparent max-sm:border-white max-sm:border-b-2 p-[.5rem] max-sm:text-white max-sm:outline-none md:text-[1.5rem] md:rounded-[.5rem]"
              {...register("password", {
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    "La contraseña debe tener un mínimo de 8 caracteres, una letra minúscula, una mayúscula y un número",
                },
              })}
            />
            {errors.password && (
              <span className="block mb-4 text-xs text-red-600">
                {errors.password.message}
              </span>
            )}

            <span className="flex justify-end items-end">
              <i
                onClick={() => {
                  console.log("Tilin");
                }}
                className="max-sm:text-white absolute mb-[1rem] md:pr-[.5rem] cursor-pointer"
              >
                icono
              </i>
            </span>
          </div>
          <p className="text-white mt-[1rem]">
            ¿Olvidaste tu{" "}
            <a href="#" className="text-blue-600 ">
              contraseña?
            </a>{" "}
          </p>

          <button
            className="flex w-[100%] justify-center p-[1.2rem] bg-[#2C45F8] 
          rounded-[.7rem] text-white text-[1.4rem] mt-[1.5rem]"
          >
            Ingresar
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default Login;
