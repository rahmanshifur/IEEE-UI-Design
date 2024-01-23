import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SliderIMg1 from "../../assets/feature-event-img/img1.jpg";
import SliderIMg2 from "../../assets/feature-event-img/img2.jpg";
import CustomHeading from '../ui/custom-heading';

const CarouselSlider = () => {
   var items = [
      {
         subHeading: <CustomHeading headingText={'FOCUSING LIMELIGHT ON'} size={'lg'} />,
         headding: <HeaddingTypography><span className='span1'>The </span><span className='span2'> MASTERMINDS!?</span></HeaddingTypography>,
         description: <Discription>Our community welcomes you to boast your innovativeness through tech competitions and informative conferences. Moreover, expanding your leadership, communication and networking competencies.</Discription>,
         image: SliderIMg1
      },
      {
         subHeading: <CustomHeading headingText={'REACH EXPERTS WORLDWIDE TO BUILD &'} size={'lg'} />,
         headding: <HeaddingTypography><span className='span1'>BOOST </span><span className='span2'> BRILLIANCE!</span></HeaddingTypography>,
         description: <Discription>INSB serves you the opportunity to connect with diverse people, share ideas through exclusive publications, seminars, professional and educational activities engaging you to unlock your true potential.</Discription>,
         image: SliderIMg2

      },
      {
         subHeading: <CustomHeading headingText={'ARE YOU'} size={'lg'} />,
         headding: <HeaddingTypography><span className='span1'>TECH </span><span className='span2'>SAVVY?</span></HeaddingTypography>,
         description: <Discription>We are a medium through which you can present your tech ideas, discover your abilities and get those aha moments!</Discription>,
         image: SliderIMg2

      },
   ]

   return (
      <CarouselBox className='aaa'>
         {
            items.map((item, i) =>
               <BoxWrapper key={i}>
                  <Box>
                     <img src={item.image} alt="" width={'100%'} height={'715.244px'} />
                  </Box>
                  <Content>
                     <ContentItem>
                        <Box sx={{ '.headding': { color: '#fff' } }}>{item.subHeading}</Box>
                        <Box>{item.headding}</Box>
                        <Box>{item.description}</Box>
                     </ContentItem>
                  </Content>
               </BoxWrapper>
            )
         }
      </CarouselBox>
   )
}

export default CarouselSlider


const HeaddingTypography = styled(Typography)(() => ({
   fontSize: '80px',
   fontWeight: 'bold',
   paddingBottom: '20px',
   '.span1': {
      color: '#fff',
   },
   '.span2': {
      color: '#FFC936',
   }
}))
const Discription = styled(Typography)(() => ({
   color: "#fff",
   fontSize: "18px"
}))
const CarouselBox = styled(Carousel)(() => ({
   position: 'relative',
   '.css-1m9128y': {
      position: 'absolute',
      zIndex: 1,
      top: '88%',
      display: 'block'
   }

}))
const BoxWrapper = styled(Box)(() => ({
   position: 'relative',
   zIndex: 1,

}))
const Content = styled(Box)(() => ({
   position: 'absolute',
   top: '0',
   left: '0',
   background: '#0C294FCC',
   width: '100%',
   height: '100%'

}))
const ContentItem = styled(Box)(() => ({
   position: 'absolute',
   top: '20%',
   left: '5%',
   width: '55%'
}))