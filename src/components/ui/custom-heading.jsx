import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const CustomHeading = ({ size, headingText, underline, href }) => {
   return (
      <Box sx={{ margin: "4px 0px" }}>
         <HeadingLink to={href ? href : ''} href={href}>
            <CustomTypography size={size}>{headingText}</CustomTypography></HeadingLink>
         <CustomTypographyUnderline underline={underline} />
      </Box>
   )
}
export default CustomHeading;


const CustomTypography = styled(Typography)(({ size }) => ({
   fontSize: (size === 'x-sm' && "15px") || (size === 'sm' && "19px") || (size === 'md' && "22px") || (size === 'lg' && "27px") || (size === 'x-lg' && "36px") || (size === 'xx-lg' && "40px"),
   fontWeight: 600,
   display: 'inline-block'
}));

const CustomTypographyUnderline = styled(Typography)(({ underline }) => ({
   borderBottom: (underline ? '4.2px solid #FFCC13' : ''),
   width: (underline === 'md-underline' && "10%") || (underline === 'lg-underline' && "18%") || (underline === 'sm-underline' && "4%"),
   margin: (underline === 'lg-underline' && 'auto'),
}))

const HeadingLink = styled(Link)(({ href }) => ({
   cursor: href ? 'pointer' : 'auto',
   color: href ? 'black' : 'black' || '#fff',
   textDecoration: 'none',
   ":hover": {
      color: (href ? '#23527c' : '')
   }
}))
