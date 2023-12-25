import { Typography, styled } from "@mui/material";


export const CustomTypography = styled(Typography)(({ size }) => ({
   fontSize: (size === 'sm' && "23px") || (size === 'ext-sm' && "19px") || (size === 'md' && "36px") || (size === 'lg' && "50px") || '10px',
   fontWeight: 600,
   // '&:hover': {
   //    fontSize: '60px'
   // }
}));

export const CustomTypographyUnderline = styled(Typography)(({ underline }) => ({
   textDecoration: 'underline',
}))