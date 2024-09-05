

const NombreUsuario = ({saludo,nombre}) => {
  return (
    <div className="max-w-3xl w-full">
      <h2 className="text-left text-white font-bold text-[20px] py-7">{saludo}{nombre}</h2>
      <hr className="py-4"></hr>
    </div>
  )
}

export default NombreUsuario