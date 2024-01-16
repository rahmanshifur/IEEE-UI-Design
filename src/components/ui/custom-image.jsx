
import { styled } from "@mui/material"
import { Link } from "react-router-dom"


const CustomImage = ({ href, src, }) => {
   return (
      <CustomImg to={href ? href : ''}>
         <img className='custom-img' src={src} alt="" />
      </CustomImg>
   )
}

export default CustomImage

const CustomImg = styled(Link)(()=>({
   textDecoration:'none',
}))