const NombreUsuario = (params) => {
  const { saludo, nombre } = params;
  return (
    <div className="max-w-3xl w-full">
      <h3 className="text-left text-white font-bold text-[16px] py-5">
        {saludo}
        {nombre}
      </h3>
      <hr className="py-4"></hr>
    </div>
  );
};

export default NombreUsuario;
