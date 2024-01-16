
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { Box, Container, Grid, styled } from "@mui/material";
import CardItem from "../reuseable/card";
import CustomButton from "../ui/custom-button";
import CustomHeading from '../ui/custom-heading';

const WhatWeDo = () => (
<<<<<<< HEAD
   <Container>
      <Box textAlign={'center'} padding={'20px 0px'} margin={'12px 0px'}><CustomHeading
         headingText={'What We Do'}
         size={'x-lg'}
      /></Box>

      <Grid container columnSpacing={{ md: 2, sm: 1, lg: 3, }} rowSpacing={{ md: 2, sm: 1, xs: 3, lg: 3 }} columns={12} >
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               icon={<Icon />}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               icon={<Icon />}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               icon={<Icon />}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               icon={<Icon />}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               icon={<Icon />}
            />
         </Grid>
         <Grid className='gridItems' item xs={12} sm={6} md={4} lg={4}>
            <CardItem
               headingText={'3D Point Cloud Object Recognition'}
               size={'md'}
               icon={<Icon />}
            />
         </Grid>
      </Grid>
      <BtnAction>
         <CustomButton
            btnText={'Know more about IEEE'}
         />
         <CustomButton
            btnText={'Know more about IEEE NSU SB'}
         />
      </BtnAction>
   </Container>
=======
   <Box sx={{ py: '30px' }}>
      <Container>
         <Box textAlign={'center'}  margin={'12px 0px'}><CustomHeading
            headingText={'What We Do'}
            size={'x-lg'}
         /></Box>
         <Box sx={{ display: 'flex' }}>
            <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
               <CardItem
                  headingText={'3D Point Cloud Object Recognition'}
                  size={'md'}
                  icon={<Icon />}
               />
            </Box>
            <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
               <CardItem
                  headingText={'3D Point Cloud Object Recognition'}
                  size={'md'}
                  icon={<Icon />}
               />
            </Box>
            <Box sx={{ borderRadius: '15px', padding: '0px 20px' }}>
               <CardItem
                  headingText={'3D Point Cloud Object Recognition'}
                  size={'md'}
                  icon={<Icon />}
               />
            </Box>
         </Box>
         <BtnAction>
            <CustomButton
               btnText={'Know more about IEEE'}
            />
            <CustomButton
               btnText={'Know more about IEEE NSU SB'}
            />
         </BtnAction>
      </Container>
   </Box>
>>>>>>> 80073347a4cf6fa5664548da6b840ffb9c2d9ab4
)

export default WhatWeDo


const Icon = styled((CastForEducationIcon))(() => ({
   fontSize: '55px',
   color: '#54595F'
}))
const BtnAction = styled((Box))(() => ({
   textAlign: 'center',
   padding: '50px 0px 0px 0px',
   display: 'flex',
   justifyContent: 'space-around'
}))