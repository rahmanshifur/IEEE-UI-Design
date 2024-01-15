

import { Box, Container, Grid } from "@mui/material";
import BlogImg1 from '../../assets/feature-bolog-img/img1.png';
import BlogImg2 from '../../assets/feature-bolog-img/img2.png';
import BlogImg3 from '../../assets/feature-bolog-img/img3.png';
import CardItem from "../reuseable/card";
import CustomButton from "../ui/custom-button";
import CustomHeading from '../ui/custom-heading';

const FeatureBlogs = () => (
   <Container>
      <Box textAlign={'center'} padding={'20px 0px'}><CustomHeading
         headingText={'Featured Blogs'}
         size={'x-lg'}
         underline={'lg-underline'}
      /></Box>
      <Grid container columnSpacing={{ md: 2, sm: 2, lg: 3, }} rowSpacing={{ md: 2, sm: 2, xs: 3, lg: 3 }} columns={12} >
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={BlogImg1}
               btnClr='green'
               btnHref={'/d'}
               href={'##'}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={BlogImg2}
               btnClr='green'
               btnHref={'/d'}
               href={'##'}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={BlogImg3}
               btnClr='green'
               btnHref={'/d'}
               href={'##'}
            />
         </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', padding: '50px 0px 0px 0px' }}><CustomButton
         btnText={'See other Blogs'}
         color='white'
      /></Box>
   </Container >
)
export default FeatureBlogs

