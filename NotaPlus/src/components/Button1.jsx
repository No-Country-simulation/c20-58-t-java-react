import { Link } from "react-router-dom"

const Button1 = ({typeBtn, link, text} ) => {
  return (
    <button type={typeBtn} className="bg-palatinateBlue_Button w-[291px] h-[48px] rounded-lg py-[12px] px-[16px] my-8 text-white ease-in-out duration-500 hover:bg-mexicanPink_logo  ">
        <Link to={link}>
            <span>{text}</span>
        </Link>
    </button>
  )
}

export default Button1