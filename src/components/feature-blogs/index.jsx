

import { Box } from "@mui/material";
import BlogImg1 from '../../assets/feature-bolog-img/img1.png';
import BlogImg2 from '../../assets/feature-bolog-img/img2.png';
import BlogImg3 from '../../assets/feature-bolog-img/img3.png';
import CardItem from "../reuseable/card";
import CustomButton from "../ui/custom-button";
import CustomHeading from '../ui/custom-heading';

const FeatureBlogs = () => (
   <Box>
      <Box textAlign={'center'} padding={'20px 0px'}><CustomHeading
         headingText={'Featured Blogs'}
         size={'x-lg'}
         underline={'lg-underline'}
      /></Box>
      <Box sx={{ display: 'flex' }}>
         <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={BlogImg1}
               btnClr='green'
               btnHref={'/d'}
            />
         </Box>
         <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={BlogImg2}
               btnClr='green'
               btnHref={'/d'}
            />
         </Box>
         <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               img={BlogImg3}
               btnClr='green'
               btnHref={'/d'}
            />
         </Box>
      </Box>
      <Box sx={{ textAlign: 'center', padding: '50px 0px 0px 0px' }}><CustomButton
         btnText={'See other Blogs'}
         color='white'
      /></Box>
      {/* <CardItem
         headingText={'3D Point Cloud Object Recognition'}
         size={'md'}
         img={EventImg2}
         btnClr='green'
         btnHref={'/a'}
         href={'/aa'}
      /> */}
   </Box >
)

export default FeatureBlogs