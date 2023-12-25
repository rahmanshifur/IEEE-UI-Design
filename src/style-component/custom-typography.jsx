import { Typography, styled } from "@mui/material";


export const CustomTypography = styled(Typography)(({ size }) => ({
   fontSize: (size === 'x-sm' && "15px") || (size === 'sm' && "19px") || (size === 'md' && "22px") || (size === 'lg' && "27px") || (size === 'x-lg' && "36px") || (size === 'xx-lg' && "40px"),
   fontWeight: 600,
   display: 'inline-block'
}));

// export const CustomTypographyUnderline = styled(Typography)(({ underline }) => ({
//    borderBottom: (underline === 'lg-underline' && '2px solid black'),
//    width: (underline === 'lg-underline' && '100px'),
// }))