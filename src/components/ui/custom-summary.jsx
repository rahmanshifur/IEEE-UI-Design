import { Typography, styled } from "@mui/material"


const CustomSummary = ({ summary }) => {
   return (
      <Summary>{summary}</Summary>
   )
}
export default CustomSummary

const Summary = styled((Typography))(() => ({
   color: '#656565',
   fontSize: '14px'
}))