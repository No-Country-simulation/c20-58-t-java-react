export const Cards = (params) => {
  const {img,title,href,alt} = params
  return (
    <div className="flex flex-col w-[136px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg items-center p-2 border-solid border-[#f1f1f1] shadow-lg shadow-black">
        <div><img className="h-[35px]" src={img} alt={alt} /></div>
        <h3 className="text-black text-wrap text-center ease-in-out duration-300 hover:uppercase" ><a href={href}>{title}</a></h3>
    </div>
  )
}
