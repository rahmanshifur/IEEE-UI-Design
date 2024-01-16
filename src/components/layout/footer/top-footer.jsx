import { Box, Container, Grid, Link, styled } from "@mui/material"


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
            <Grid container columns={12} spacing={2} textAlign={'center'}>
               <Grid item lg={5} md={12} sm={12}>
                  <Box>
                     {Items.map((item) =>
                        <LinkItems href={item.url}>
                           {item.name}
                        </LinkItems>
                     )}
                  </Box>
               </Grid>
               <Grid item lg={7} md={12} sm={12} >
                  <Box>
                     <span style={{ color: '#fff' }}>© Copyright 2021 INSB – All rights reserved. Developed by</span>
                     <Link href='#' sx={{ color: '#FFC936', textDecoration: 'none', fontWeight: '600', }}> INSB Web Development Team</Link>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Box >
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