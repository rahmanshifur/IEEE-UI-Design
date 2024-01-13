import * as React from 'react';
import Accordions from '../accordion';
import CustomButton from "../ui/custom-button";
import CustomHeading from "../ui/custom-heading";
const { Box, Typography, Grid, Container, styled } = require("@mui/material")




const FAQSection = () => {

   const [expanded, setExpanded] = React.useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <BoxWrapper >
         <Container>
            <Grid container columns={12}>
               <LeftGrid item lg={6} textAlign={'center'}>
                  <CustomHeading
                     headingText={'Do you have any question?'}
                     size={'xx-lg'}
                  />
                  <CustomButton
                     btnText={'Ask a Question'}
                     color={'black'}
                     href={'##'}
                  />
               </LeftGrid>
               <RightGrid item lg={6}>
                  <CustomHeading
                     headingText={'FAQ'}
                     size={'lg'}
                     underline={'sm-underline'}
                  />
                  <Accordions
                     expanded={expanded === 'panel1'}
                     handleChange={handleChange('panel1')}
                     AccorHeading={'What is INSB?'}
                     AccrText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget..'
                  />
                  <Accordions
                     expanded={expanded === 'panel2'}
                     handleChange={handleChange('panel2')}
                     AccorHeading={'What is INSB?'}
                     AccrText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget..' />
                  <Accordions
                     expanded={expanded === 'panel3'}
                     handleChange={handleChange('panel3')}
                     AccorHeading={'What is INSB?'}
                     AccrText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget..' />
                  <Box padding={'10px 0px'}>
                     <CustomButton
                        btnText={'See other questions'}
                        color={'white'}
                        href={'##'}
                     />
                  </Box>
               </RightGrid>
            </Grid>
         </Container>
      </BoxWrapper>
   )
}
export default FAQSection

const BoxWrapper = styled((Box))(() => ({
   backgroundImage: ' linear-gradient(180deg, #009CCB 0%, #00638B 100%)',
   margin: '25px 0px',
}))
const LeftGrid = styled((Grid))(() => ({
   padding: '85px 10px',
   '.headding': {
      color: '#FFFFFF',
      fontFamily: "Poppins Sans-serif",
      flexDirection: 'collum',
      lineHeight: 1,
      fontWeight: 600,
      textShadow: '5px 6px 11px rgba(0,0,0,0.3)',
      paddingBottom: '20px'
   }
}))
const RightGrid = styled((Grid))(() => ({
   padding: '10px',
   '.headding': {
      color: '#fff',
   }
}))



