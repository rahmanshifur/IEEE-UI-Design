import { Box, Container, Grid } from "@mui/material";
import EventImg1 from '../../assets/feature-event-img/img1.jpg';
import EventImg2 from '../../assets/feature-event-img/img2.jpg';
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
      <Grid container columnSpacing={{ md: 2, sm: 2, lg: 3, }} rowSpacing={{ md: 2, sm: 2, xs: 3, lg: 3 }} columns={12} >
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={EventImg2}
               btnClr='white'
               btnSize='md'
               btnBgClr={'primary'}
               btnHref={'/d'}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={EventImg1}
               btnClr='white'
               btnSize='md'
               btnBgClr={'primary'}
               btnHref={'/d'}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={EventImg3}
               btnClr='white'
               btnSize='md'
               btnBgClr={'primary'}
               btnHref={'/d'}
            />
         </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', padding: '50px 0px 0px 0px' }}><CustomButton
         btnText={'See All Events'}
         color='white'
      /></Box>
   </Container >
)

export default FeatureEvent
