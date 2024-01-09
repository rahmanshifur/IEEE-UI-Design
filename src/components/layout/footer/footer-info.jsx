import { Link, Typography, styled } from "@mui/material";


const FooterInfo = ({ url, icon, name }) => {
   return (
      <ItemLink href={url}>
         <span style={{ fontSize: '18px' }}>{icon}</span>
         <Typography sx={{ paddingLeft: "5px", fontSize: '15px', }}>{name}</Typography>

      </ItemLink>
   )
}

export default FooterInfo

const ItemLink = styled(Link)(() => ({
   color: '#fff',
   textDecoration: 'none',
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'row',
   ":hover": {
      '.css-17371rs-MuiTypography-root': {
         color: '#fcb900',
         '.MuiStepContent-transition': {
         }
      }
   }

}))
