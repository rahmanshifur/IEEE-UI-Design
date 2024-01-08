import { Box } from "@mui/material"
import CustomButton from "../../components/ui/custom-button"
import CustomHeading from "../../components/ui/custom-heading"
import CustomSummary from "../../components/ui/custom-summary"
import { shortText } from "../../helper"


const HomePage = () => {
   return (
      <Box>
         <h1>
            <CustomHeading href={'/aaa'} size="lg" underline='lg-underline' headingText={'hello heading'} />
            <CustomHeading size="lg" underline='md-underline' headingText={'hello heading'} />
            <CustomHeading size="lg" underline='sm-underline' headingText={'hello heading'} />
            <CustomHeading size="x-sm" underline='sm-underline' headingText={'hello heading'} />


            <CustomButton btnText={'Know more about IEEE'} />
            <CustomButton btnText={'See All News'} color={'black'} />

            <CustomSummary summary={shortText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, commodi impedit! Eum quae aut sapiente ex corporis inventore amet molestias!', 70)} />
         </h1>
      </Box>
   )
}
export default HomePage

