export const IconFooter = (params) => {
  const {href,img,alt} = params
   return (
    <>
        <li>
            <a href={href}>
                <img className="h_[44px]" src={img} alt={alt} />
            </a>
        </li>
    </>
  )
}
