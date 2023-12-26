import { styled } from "@mui/material";
import { Link } from "react-router-dom";


const CustomButton = (props) => {

   return (
      <BtnLink to={props.href ? props.href : ''} props={props}>{props.btnText}</BtnLink >
   )
}

export default CustomButton;

const BtnLink = styled(Link)(({ props: { color, size, bgColor, borderRadius, padding, width } }) => ({
   textDecoration: 'none',
   color: (color === 'white' && "#fff") || "#000000",
   backgroundColor: (bgColor === 'orange' && '#FFC936') || (bgColor === 'black' && '#222222') || (bgColor === 'gray' && '#E3E3E3') || (bgColor === 'skyBlue' && '#3381B1') || '#fff',
   fontSize: (size === 'md-btn' && '15px') || '16px',
   fontWeight: 500,
   display: 'inline-block',
   boxShadow: '0px 0px 10px -3px rgba(0,0,0,0.5)',
   borderRadius: (borderRadius === '5px' && ' 5px 5px 5px 5px') || (borderRadius === '1px' && ' 1px 1px 1px 1px') || (borderRadius === '30px' && '30px') || 'none',
   padding: (padding === 'x-sm-padding' && '5px 10px') || (padding === 'sm-padding' && '10px') || (padding === 'md-padding' && '15px 30px') || (padding === 'lg-padding' && '22px 45px') || '12px 24px',
   width: (width === 'full' && '100%')
}))

