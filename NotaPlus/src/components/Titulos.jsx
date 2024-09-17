const Titulos = (params) => {
  const {text,title} = params
  return (
    <div className="max-w-3xl w-full">
        <h2 className=" uppercase pt-4 pb-2 text-secondary font-bold text-center text-azulClaroBase text-[25px] ">{text}{title}</h2>
    </div>
  )
}

export default Titulos