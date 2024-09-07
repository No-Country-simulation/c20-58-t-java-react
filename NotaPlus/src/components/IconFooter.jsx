export const IconFooter = (params) => {
  const {href,mustDo, img,alt} = params
   return (
    <>
        <li>
            <a href={href} onClick={mustDo}>
                <img className="h_[44px] pointer" src={img} alt={alt} />
            </a>
        </li>
    </>
  )
}
