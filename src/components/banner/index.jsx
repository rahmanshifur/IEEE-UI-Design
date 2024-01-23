import { Box, styled } from "@mui/material"


const Banner = () => {
   return (
      <Box position={'relative'}>
         <BoxWapper>
            <h1>hello</h1>
            <h1>hello</h1>
         </BoxWapper>
         <Box sx={{
            transform: 'rotate(180deg)', background: 'white', bottom: '-1px',
            overflow: 'hidden',
            position: 'absolute',
            left: 0,
            width: '100%',
            direction: 'ltr',
            width: 'calc(166% + 1.3px)',
            height: '77px'
         }} ></Box>
      </Box>
   )
}
export default Banner

const BoxWapper = styled((Box))(() => ({
   backgroundColor: 'transparent',
   backgroundImage: 'linear-gradient(180deg, #141414 0%, #4197FF 96%)',
   position: 'absolute',
   opacity: 1,
   // transform: 'rotate(180deg)'
   height: ' 100%',
   width: '100%',
   top: 0,
   left: 0,
   position: 'absolute'
}))