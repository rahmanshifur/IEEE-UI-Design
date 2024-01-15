import AvTimerIcon from '@mui/icons-material/AvTimer';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Container, styled, Grid, Typography } from "@mui/material";
import FooterLogo2 from '../../../assets/footer-logo/INSB.png';
import FooterLogo1 from '../../../assets/footer-logo/ieee-mb-blue.png';
import FooterInfo from './footer-info';
import TopFooter from './top-footer';
const Footer = () => {

   // const Items = [
   //    {
   //       icon: <HomeIcon />,
   //       name: 'ieee.org',
   //       url: '#'
   //    },
   //    {
   //       icon: <HomeIcon />,
   //       name: 'ieee.org',
   //       url: '#'
   //    },
   //    {
   //       icon: <HomeIcon />,
   //       name: 'ieee.org',
   //       url: '#'
   //    },
   //    {
   //       icon: <HomeIcon />,
   //       name: 'ieee.org',
   //       url: '#'
   //    },
   //    {
   //       icon: <HomeIcon />,
   //       sname: 'Follow Us:',
   //       name: 'sfasf',
   //       url: '#'
   //    },

   // ]

   return (
      <Box>
         <Box sx={{ background: '#000' }}>
            <Container sx={{ padding: '30px 0px' }}>
               <FooterLogo container>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                     <img className='footer-logo-one' src={FooterLogo1} alt="" height={90} />
                  </Grid>
                  <Grid sx={{ textAlign: 'end', "@media (max-width:479px)": { textAlign: 'start' }, "@media (max-width:767px)": { textAlign: 'start', } }} item lg={6} md={6} sm={6} xs={6}>
                     <img className='footer-logo-two' src={FooterLogo2} alt="" />
                  </Grid>
               </FooterLogo>

               <Grid container columns={16} spacing={3} sx={{ paddingTop: '15px' }}>
                  <Grid item lg={3} md={4} sm={4} xs={6}>
                     <FooterInfo name={'Ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Explore'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Standards'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Specturm'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />
                  </Grid>
                  <Grid item lg={3} md={4} sm={4} xs={6}>
                     <FooterInfo name={'Ask a Question'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Collaboratec'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'About INSB'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />

                  </Grid>

                  <Grid item lg={3} md={4} sm={4} xs={6}>
                     <FooterInfo name={'Ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Explore'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Standards'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Specturm'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />

                  </Grid>
                  <Grid item lg={3} md={4} sm={4} xs={6}>
                     <FooterInfo name={'Ask a Question'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Collaboratec'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'About INSB'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Specturm'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />

                  </Grid>


                  <Grid item lg={4} md={3} sm={16} xs={16} sx={{ "@media (max-width:767px)": { textAlign: 'center' } }} >
                     <Typography fontWeight={'bold'} fontSize={'25px'} color={'#FFF'}>Flolow Us :</Typography>
                     <Box sx={{ "@media (max-width:767px)": { textAlign: 'center' } }}>
                        <Box sx={{ color: '#FFF', display: '', padding: '5px 5px 5px 0px', }}>
                           <DraftsIcon sx={{ background: '#5F5F5F', paddingLeft: '0px', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                           <AvTimerIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                           <FacebookIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                           <DraftsIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                           <InstagramIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px' }} fontSize='medium' />

                        </Box>
                        <Box sx={{color:'#fff' , }}>
                           <Typography sx={{display:'flex', alignItems:'center'}}><span><DraftsIcon /></span><span>abcd@gmail.com</span></Typography>
                           <Typography><span><AvTimerIcon /></span><span>Last Updated: 31 march 2021</span></Typography>
                        </Box>
                     </Box>
                  </Grid>

               </Grid>
            </Container>
         </Box>
         <TopFooter />
      </Box >
   )
}
export default Footer

const FooterLogo = styled(Grid)(() => ({
   "@media (max-width:600px)": { justifyContent: 'space-around' },
   '.footer-logo-one': {
      "@media (max-width:767px)": { width: '170px', height: '80px', },
      "@media (max-width:469px)": { width: '100px', height: '50px', },
   },
   '.footer-logo-two': {

      "@media (max-width:767px)": { width: '170px', height: '80px', },
      "@media (max-width:469px)": { width: '100px', height: '50px', },
   }
}))
