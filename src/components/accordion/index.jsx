import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';
const { Box, Typography, Grid, Container, styled } = require("@mui/material")

const Accordions = ({ AccrText, AccorHeading, expanded, handleChange }) => {


   return (
      <Box>
         <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ background: '#fff', borderRadius: '5px' }}>
               <Typography>{AccorHeading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>{AccrText}</Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}
export default Accordions

const Accordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
   padding: '10px 0px',
   background: 'transparent',
   border: 'none',
}));
const AccordionSummary = styled((props) => (
   <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
   />
))(({ theme }) => ({
   minHeight: '34px',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      margin: '0',
   },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
   borderTop: '1px solid rgba(0, 0, 0, .125)',
   color: '#fff',
}));
