import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import { CustomTypography } from "../../style-component/custom-typography";


const CustomHeading = ({ size, headingText, underline, href }) => {
   return (
      <Box>

         <HeadingLink href={href ? href : ''}>
            <CustomTypography size={size}>{headingText}</CustomTypography></HeadingLink>
         <CustomTypographyUnderline underline={underline} />
      </Box>
   )
}
export default CustomHeading;

const CustomTypographyUnderline = styled(Typography)(({ underline }) => ({
   borderBottom: '4.2px solid #FFCC13',
   width: (underline === 'md-underline' && "10%") || (underline === 'lg-underline' && "18%") || (underline === 'sm-underline' && "4%") || '50%',
   margin: (underline === 'lg-underline' && 'auto'),
}))

const HeadingLink = styled(Link)(({ href }) => ({
   cursor: href ? 'pointer' : 'auto',
   color: href ? 'black' : ''
}))


//    backgroundColor: "#F7F9FF",
//    height: "auto",
//    [theme.breakpoints.up("sm")]: {
//      width: "574px",
//      padding: "60px",
//    },
//    [theme.breakpoints.down("sm")]: {
//      width: "100%",
//      padding: "15px",
//    },
//    borderRadius: "10px",
//    textAlign: "center",
//  }));