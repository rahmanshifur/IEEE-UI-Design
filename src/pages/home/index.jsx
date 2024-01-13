import { Box, Container } from "@mui/material"
import FeatureBlogs from "../../components/feature-blogs"
import FeatureEvent from "../../components/feature-event"
import WhatWeDo from "../../components/what-we-do"


const HomePage = () => {
   return (
      <Box>
         <Container>
            <WhatWeDo />
            <FeatureEvent />
            <FeatureBlogs />
         </Container>
      </Box>
   )
}
export default HomePage

