
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Link, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomHeading from '../ui/custom-heading';


const CardItem = ({ headingText, size, href, img, btnClr, btnSize, btnBgClr, btnHref, icon }) => {
   return (
      <CardItems
         cardsx={{ icon, btnSize }}>
         {img &&
            <ImgLink href={href ? href : ''}>
               <ImgCard
                  image={img}
               />
               {href && <HoverArrowIcon className='hoverIcon'>
                  <ArrowRightAltIcon fontSize='large' sx={{
                     color: '#fff',
                  }} />
               </HoverArrowIcon>}

            </ImgLink>}
         <ContentCard icon={icon}>
            {icon && <Typography >{icon}</Typography>}
            <CustomHeading headingText={headingText} size={size} href={href} />
            <Typography variant="body2" sx={{ color: '#54595F', fontSize: (icon ? '17px' : '15px') }}>
               Lizards are a widespread group of squamate reptiles, with over 6,000
               species, ranging across all continents except Antarctica.
               Lizards are a widespread group of squamate reptiles, with over 6,000
            </Typography>
         </ContentCard>
         <CardActions sx={{ paddingLeft: '15px', paddingBottom: '20px' }}>
            {btnHref &&
               <BtnCard
                  href={btnHref}
                  size={'small'}
                  btnClr={{ btnClr, btnSize, btnBgClr }}>Read More</BtnCard>}
         </CardActions>

      </CardItems >
   )
}

export default CardItem

const CardItems = styled(Card)(({ cardsx: { icon, btnSize } }) => ({
   maxWidth: 345,
   textAlign: (icon ? 'center' : ''),
   borderRadius: (btnSize ? '15px' : ''),
   boxShadow: (btnSize ? '0px 0px 10px 0px rgba(0,0,0,0.5)' : ''),

}))
const HoverArrowIcon = styled(Box)(({ }) => ({
   background: '#000000ad',
   height: "100%",
   width: "0",
   margin: 'auto',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   overflow: 'hidden',
   top: '0',
   left: '0',
   // right: '0',
   bottom: '0',
   position: 'absolute',
   opacity: '0',
   transition: 'all .5s',

}))
const ImgLink = styled(Link)(() => ({
   position: 'relative',
   ':hover': {
      '& .hoverIcon ': {
         opacity: "1",
         width: "100%",
      }
   },
}))
const ImgCard = styled(CardMedia)(() => ({
   height: '250px',
}))
const ContentCard = styled(CardContent)(({ icon }) => ({
   padding: (icon ? '10px 20px' : ''),
   letterSpacing: 5,
   ':hover': {
      '.css-l231mk-MuiTypography-root': {
         transition: (icon ? 'all .4s' : ''),
         color: (icon ? '#fcb900' : ''),

      },
      '.css-1if0mqq-MuiSvgIcon-root': {
         color: '#000',
         transition: (icon ? 'all .4s' : ''),

      }
   }

}))


const BtnCard = styled(Link)(({ btnClr: { btnClr, btnSize, btnBgClr } }) => ({
   textDecoration: 'none',
   padding: (btnSize === 'md' && '15px 25px') || '0px',
   color: (btnClr === 'white' && '#fff') || (btnClr === 'black' && '#000') || (btnClr === 'green' && '#61ce70') || '#000',
   background: (btnSize ? (btnBgClr === 'primary' && '#3381B1') || (btnBgClr === 'light' && '#fff') : ''),
   border: (btnSize ? '1px solid #fff' : ''),
   borderRadius: (btnSize ? '5px' : ''),
   letterSpacing: 1,
   ':hover': {
      color: (btnSize ? '#000' : ''),
      background: (btnSize ? '#fff' : ''),
      border: (btnSize ? '1px solid #000' : ''),
   }

}))