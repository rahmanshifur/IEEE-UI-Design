import { styled } from "@mui/material";
import { Link } from "react-router-dom";


const CustomButton = (props) => {

   return (
      <BtnLink to={props.href ? props.href : ''} props={props}>{props.btnText}</BtnLink >
   )
}

export default CustomButton;

const BtnLink = styled(Link)(({ props: { color, size } }) => ({
   textDecoration: 'none',
   color: (color === 'white' && "#fff") || (color === 'black' && "#000") || "#000000",
   backgroundColor: (color === 'black' && '#FFC936') || (color === 'white' && '#222222') || '#fff',
   fontSize: '16px',
   fontWeight: 500,
   display: 'inline-block',
   boxShadow: '0px 0px 10px -3px rgba(0,0,0,0.5)',
   borderRadius: '5px',
   padding: '15px 25px'
}))

