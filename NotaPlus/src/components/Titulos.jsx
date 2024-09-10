const Titulos = (params) => {
  const {title} = params
  return (
    <div className="max-w-3xl w-full">
        <h2 className=" uppercase py-4 text-secondary font-bold text-center text-mexicanPink_logo text-[25px] ">{title}</h2>
    </div>
  )
}

export default Titulos