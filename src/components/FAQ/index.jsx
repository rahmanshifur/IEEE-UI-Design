import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';
import CustomButton from "../ui/custom-button";
import CustomHeading from "../ui/custom-heading";
const { Box, Typography, Grid, Container, styled } = require("@mui/material")


const Accordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
   border: `1px solid ${theme.palette.divider}`,
   '&:not(:last-child)': {
      borderBottom: 0,
   },
   '&::before': {
      display: 'none',
   },
}));

const AccordionSummary = styled((props) => (
   <MuiAccordionSummary 
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
   />
))(({ theme }) => ({
   minHeight:'30px' ,
   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      margin:'0',
   },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
   borderTop: '1px solid rgba(0, 0, 0, .125)',
   color:'#fff',
   
}));


const FAQSection = () => {

   const [expanded, setExpanded] = React.useState('panel1');

   const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
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
                  <Box>
                     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ background: 'transparent', border: 'none' }}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ background: '#fff', borderRadius: '5px'}}>
                           <Typography>Collapsible Group Item #1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                              sit amet blandit leo lobortis eget.
                           </Typography>
                        </AccordionDetails>
                     </Accordion>
                  </Box>
                  <CustomButton
                     btnText={'Ask a Question'}
                     color={'black'}
                     href={'##'}
                  />
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
   '.headding': {
      color: '#fff'
   }
}))



