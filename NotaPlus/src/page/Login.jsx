import Footer from "../components/Footer";
import logo from "../asset/notaPlusLogo.svg";
function Login() {
  return (
    <div className="flex flex-col content-center min-h-[95vh] place-content-center">
      <div className="flex flex-col md:max-xl:w-[95%] md:self-center  md:border-blue-400 md:border-2 p-[2rem] rounded-md bg-[#0d0f3f] ">
        <img
          src={logo}
          alt="logoNotaPlus"
          className="flex self-center w-[50%] relative sm:bottom-[3rem] md:bottom-[0rem]"
        />
        <form action="" className="flex flex-col">
          <label htmlFor="" className="text-white ">
            ID
          </label>
          <input
            type="text"
            className="max-sm:bg-transparent max-sm:border-white max-sm:border-b-2 p-[.5rem] max-sm:text-white max-sm:outline-none md:text-[1.5rem] md:rounded-[.5rem]"
            autoFocus
          />
          <div className="flex flex-col">
            <label htmlFor="" className="text-white mt-[1rem]">
              Contraseña
            </label>
            <input
              type="password"
              className="max-sm:bg-transparent max-sm:border-white max-sm:border-b-2 p-[.5rem] max-sm:text-white max-sm:outline-none md:text-[1.5rem] md:rounded-[.5rem]"
            />
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
    </div>
  );
}

export default Login;
