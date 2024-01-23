
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { Box, Container, styled } from "@mui/material";
import CardItem from "../reuseable/card";
import CustomButton from '../ui/custom-button';
import CustomHeading from '../ui/custom-heading';

const WhatWeDo = () => (
   <Box sx={{ py: '30px' }}>
      <Container>
         <Box textAlign={'center'} margin={'12px 0px'}><CustomHeading
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