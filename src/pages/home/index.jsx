import { Box } from "@mui/material"
import FAQSection from "../../components/FAQ"
import CarouselSlider from "../../components/carousel"
import ContactCopmonent from "../../components/contact-us"
import FeatureBlogs from "../../components/feature-blogs"
import FeatureEvent from "../../components/feature-event"
import WhatWeDo from "../../components/what-we-do"
<<<<<<< HEAD
=======
import ContactCopmonent from "../../components/contact-us"
import LatestEvent from "../../components/latest-event"
>>>>>>> 80073347a4cf6fa5664548da6b840ffb9c2d9ab4


const HomePage = () => {
   return (
      <Box>
         <CarouselSlider />
         <WhatWeDo />
         <LatestEvent/>
         <FeatureEvent />
         <FeatureBlogs />
         <FAQSection />
         <ContactCopmonent />
      </Box>
   )
}
export default HomePage

