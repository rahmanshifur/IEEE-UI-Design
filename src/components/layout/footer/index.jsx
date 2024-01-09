import AvTimerIcon from '@mui/icons-material/AvTimer';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Container, Grid, Typography } from "@mui/material";
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
               <Box >
                  <Box display={'flex'} justifyContent={'space-between'}>
                     <img src={FooterLogo1} alt="" height={90} />
                     <Box>
                        <img src={FooterLogo2} alt="" />
                        {/* <Typography fontWeight={'bold'} fontSize={'25px'} color={'#FFF'}>Flolow Us :</Typography> */}
                     </Box>
                  </Box>
               </Box>
               <Grid container columns={16} spacing={3} sx={{ paddingTop: '15px' }}>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                     <FooterInfo name={'Ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Explore'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Standards'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Specturm'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                     <FooterInfo name={'Ask a Question'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Collaboratec'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'About INSB'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />

                  </Grid>

                  <Grid item lg={3} md={3} sm={3} xs={6}>
                     <FooterInfo name={'Ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Explore'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Standards'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Specturm'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />

                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                     <FooterInfo name={'Ask a Question'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Collaboratec'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'About INSB'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'ieee.org'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'IEEE Specturm'} icon={<HomeIcon />} url={'#'} />
                     <FooterInfo name={'More sites'} icon={<HomeIcon />} url={'#'} />

                  </Grid>
                  <Grid item lg={4} md={3} sm={12} xs={12} >
                     <Typography
                        fontWeight={'bold'}
                        fontSize={'25px'}
                        color={'#FFF'}>Flolow Us :</Typography>
                     <Box sx={{ color: '#FFF', display: 'flex', padding: '5px 5px 5px 0px', }}>
                        <DraftsIcon sx={{ background: '#5F5F5F', paddingLeft: '0px', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                        <AvTimerIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                        <FacebookIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                        <DraftsIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px', marginRight: '6px' }} fontSize='medium' />
                        <InstagramIcon sx={{ background: '#5F5F5F', padding: '6px', borderRadius: '5px' }} fontSize='medium' />
                     </Box>
                     <FooterInfo name={'abcd@gmail.com'} icon={<DraftsIcon />} url={'#'} />
                     <FooterInfo name={'Last Updated: 31 march 2021 '} icon={<AvTimerIcon />} url={'#'} />
                  </Grid>
               </Grid>
            </Container>
         </Box>
         <TopFooter />
      </Box >
   )
}
export default Footer


