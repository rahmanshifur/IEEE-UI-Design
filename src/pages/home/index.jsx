import { Box } from "@mui/material"
import FAQSection from "../../components/FAQ"
import FeatureBlogs from "../../components/feature-blogs"
import FeatureEvent from "../../components/feature-event"
import WhatWeDo from "../../components/what-we-do"
import ContactCopmonent from "../../components/contact-us"


const HomePage = () => {
   return (
      <Box>
         <WhatWeDo />
         <FeatureEvent />
         <FeatureBlogs />
         <FAQSection />
         <ContactCopmonent/>
      </Box>
   )
}
export default HomePage

