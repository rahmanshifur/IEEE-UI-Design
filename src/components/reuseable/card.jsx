
import { Link, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomHeading from '../ui/custom-heading';



const CardItem = ({ headingText, size, href, img, btnClr, btnSize, btnBgClr, btnHref, icon }) => {
   return (
      <Card
         sx={{ maxWidth: 335, textAlign: (icon ? 'center' : '') }} >
         {img && <ImgCard
            image={img}
         // title="green iguana"
         />}

         <ContentCard icon={icon}>
            <Typography >{icon}</Typography>
            <CustomHeading headingText={headingText} size={size} href={href} />
            <Typography variant="body2" btnClr="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over 6,000
               species, ranging across all continents except Antarctica
            </Typography>
         </ContentCard>
         <CardActions sx={{ paddingLeft: '15px', paddingBottom: '20px' }}>
            {btnHref &&
               <BtnCard href={btnHref} size={'small'} btnClr={{ btnClr, btnSize, btnBgClr }}>Read More</BtnCard>}
         </CardActions>

      </Card >
   )
}

export default CardItem

const ImgCard = styled(CardMedia)(() => ({
   height: '250px',

}))
const ContentCard = styled(CardContent)(({ icon }) => ({
   padding: (icon ? '10px 20px 65px 20px' : ''),
   ':hover': {
      '.css-l231mk-MuiTypography-root': {
         color: (icon ? '#fcb900' : ''),
      }
   }

}))


const BtnCard = styled(Link)(({ btnClr: { btnClr, btnSize, btnBgClr } }) => ({
   textDecoration: 'none',
   padding: (btnSize === 'md' && '15px 25px') || '0px',
   color: (btnClr === 'white' && '#fff') || (btnClr === 'black' && '#000') || (btnClr === 'green' && '#61ce70') || '#000',
   background: (btnBgClr === 'primary' && '#3381B1') || (btnBgClr === 'light' && '#fff'),
   border: '1px solid #fff',
   borderRadius: '5px',
   ':hover': {
      color: (btnSize ? '#000' : ''),
      background: (btnSize ? '#fff' : ''),
      border: '1px solid #000'
   }

}))