import { Box, Container } from "@mui/material";
import EventImg1 from '../../assets/feature-event-img/img1.jpg';
import EventIm2 from '../../assets/feature-event-img/img2.jpg';
import EventImg3 from '../../assets/feature-event-img/img3.jpg';
import CardItem from "../reuseable/card";
import CustomButton from "../ui/custom-button";
import CustomHeading from '../ui/custom-heading';

const FeatureEvent = () => (
   <Container >
      <Box textAlign={'center'} padding={'20px 0px'}><CustomHeading
         headingText={'Featured Events'}
         size={'x-lg'}
         underline={'lg-underline'}
      /></Box>
      <Box sx={{ display: 'flex' }}>
         <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={EventImg1}
               btnClr='white'
               btnSize='md'
               btnBgClr={'primary'}
               btnHref={'/d'}
            />
         </Box>
         <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={EventIm2}
               btnClr='white'
               btnSize='md'
               btnBgClr={'primary'}
               btnHref={'/d'}
            />
         </Box>
         <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={EventImg3}
               btnClr='white'
               btnSize='md'
               btnBgClr={'primary'}
               btnHref={'/d'}
            />
         </Box>
      </Box>
      <Box sx={{ textAlign: 'center', padding: '50px 0px 0px 0px' }}><CustomButton
         btnText={'See All Events'}
         color='white'
      /></Box>
   </Container >
)

export default FeatureEvent