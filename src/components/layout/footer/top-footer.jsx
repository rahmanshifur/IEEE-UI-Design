import { Box, Container, Link, styled } from "@mui/material"


const TopFooter = () => {

   const Items = [
      {
         name: 'Home',
         url: '#'
      },
      {
         name: 'Contact',
         url: '#'
      },
      {
         name: 'FAQ',
         url: '#'
      },
      {
         name: 'Sitemap',
         url: '#'
      },
      {
         name: 'Feedback',
         url: '#'
      },
   ]

   return (
      <Box bgcolor={'#0088B8'} padding={'22px'} fontSize={'16px'}>
         <Container>
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }} >
               <Box item lg={6} >
                  {Items.map((item) =>
                     <LinkItems>
                        {item.name}
                     </LinkItems>
                  )}
               </Box>
               <Box item lg={6} >
                  <span style={{ color: '#fff' }}>© Copyright 2021 INSB – All rights reserved. Developed by</span>
                  <Link href='#' sx={{ color: '#FFC936', textDecoration: 'none', fontWeight: '600', }}> INSB Web Development Team</Link>
               </Box>
            </Box>
         </Container>
      </Box>
   )
}

export default TopFooter

const LinkItems = styled(Link)(() => ({
   color: '#FFF',
   textDecoration: 'none',
   padding: '15px 15px 15px 15px',
   ':first-child': {
      paddingLeft: "0px"
   }
}))