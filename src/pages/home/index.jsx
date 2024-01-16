import { Box } from "@mui/material"
import FAQSection from "../../components/FAQ"
import CarouselSlider from "../../components/carousel"
import ContactCopmonent from "../../components/contact-us"
import FeatureBlogs from "../../components/feature-blogs"
import FeatureEvent from "../../components/feature-event"
import LatestEvent from "../../components/latest-event"
import WhatWeDo from "../../components/what-we-do"


const HomePage = () => {
   return (
      <Box>
         <CarouselSlider />
         <WhatWeDo />
         <LatestEvent />
         <FeatureEvent />
         <FeatureBlogs />
         <FAQSection />
         <ContactCopmonent />
      </Box>
   )
}
export default HomePage

