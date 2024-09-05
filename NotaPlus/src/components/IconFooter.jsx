

export const IconFooter = ({href,img,alt}) => {
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
