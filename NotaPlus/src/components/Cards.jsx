

export const Cards = ({img, title, alt}) => {
  return (
    <div className="flex flex-col w-[136px] bg-white rounded-lg items-center p-2 border-solid border-[#f1f1f1] shadow-lg shadow-black">
        <div><img className="h-[35px]" src={img} alt={alt} /></div>
        <h3 className="text-argentinianBlue_logo"><a href="#">{title}</a></h3>
    </div>
  )
}
