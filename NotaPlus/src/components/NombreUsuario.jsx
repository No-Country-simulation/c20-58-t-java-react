const NombreUsuario = (params) => {
  const { img, alt, saludo, nombre, apellido, role  } = params;
  return (
    <>
      <div className="flex justify-start  items-center ml-4  h-14 bg-transparent w-[250px] border-2 borde-white rounded rounded-30  shadow-lg shadow-black self-start mt-2">
          <div className="bg-orange-200 rounded-full h-16 w-16 p-2 -mx-6">
                    <img className="rounded-full h-12 w-12" src={img} alt={alt}  />
          </div>    
          <div className="pl-10 h-14 w-full">
                  <h3 className="text-left text-white font-bold text-[16px] pt-1">
                    {saludo} {nombre} {apellido}

                  </h3>
                  <p className="text-silver_borderInput"> {role}</p>  
            </div>
            <hr className="py-4"></hr>
      </div>
      
    </>
)};

export default NombreUsuario;

