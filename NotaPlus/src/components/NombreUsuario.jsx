const NombreUsuario = (params) => {
  const { img, alt, saludo, nombre, role  } = params;
  return (
    <>
      <div className="flex justify-start  items-center   h-14 bg-transparent max-w-3xl w-2/3 border-2 borde-white rounded rounded-30  drop-shadow-2xl">
          <div className="bg-orange-200 rounded-full h-16 w-16 p-2 -mx-6">
                    <img className="rounded-full h-12 w-12" src={img} alt={alt}  />
          </div>    
          <div className="pl-10 h-14 w-full">
                  <h3 className="text-left text-white font-bold text-[16px] pt-1">
                    {saludo}
                    {nombre}
                  </h3>
                  <p className="text-silver_borderInput"> {role}</p>  
            </div>
            <hr className="py-4"></hr>
      </div>
      
    </>
)};

export default NombreUsuario;

