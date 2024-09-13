import { useForm } from "react-hook-form";

import { Header } from "../components/Header";
import NombreUsuario from "../components/NombreUsuario";
import Titulos from "../components/Titulos";
import Label from "../components/Label";
import Button1 from "../components/Button1";
import FooterNavBar from "../components/FooterNavBar";

const EditarPerfil = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Header />
      <section className="flex flex-col items-center">
        <NombreUsuario nombre="Nombre.Usuario" />

        {/* {Acá se debe hacer una petición get por Id} 
              permitir modificar password, email y agregar foto(lo cual genera una petición put)
          */}

        <div className="overflow-y-auto h-96 scrollbar-hide scroll-smooth  max-w-3xl w-full mt-4">
          <form className="flex flex-col items-center" onSubmit={onSubmit}>
            <Titulos title="Editar Perfil" />

            <Label para="email" title="E-mail:" />
            <input
              className="w-full p-2 mb-1"
              type="email"
              placeholder="Email..."
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,

                  message: "E-mail no válido",
                },
              })}
            />
            {errors.email && (
              <span className="block mb-4 text-xs text-red-600">
                {errors.email.message}
              </span>
            )}

            <Label para="password" title="Nueva Contraseña: " />
            <input
              className="w-full p-2 mt-1 mb-1"
              type="password"
              placeholder="Escriba Nueva Contraseña..."
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

            <Label para="confirmPassword" title="Confirmar Contraseña: " />
            <input
              className="w-full p-2 mt-1mb-1"
              type="password"
              placeholder="Confirmar Nueva Contraseña..."
              {...register("confirmPassword", {
                validate: (value) =>
                  value == watch("password") || "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && (
              <span className="block mb-4 text-xs text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}

            <Button1
              typeBtn="submit"
              text="Guardar"
            />
            

            {/* <pre>
                    {JSON.stringify(watch(),null,2)}
                  </pre> */}
          </form>
        </div>
      </section>
      <FooterNavBar />
    </>
  );
};

export default EditarPerfil;
