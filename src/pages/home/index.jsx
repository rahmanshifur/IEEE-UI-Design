import CustomHeading from "../../components/ui/custom-heading"


const HomePage = () => {
   return (
      <h1>
         <CustomHeading href={'/aaa'} size="lg" underline='lg-underline' headingText={'hello heading'} />
         <CustomHeading size="lg" underline='md-underline' headingText={'hello heading'} />
         <CustomHeading size="lg" underline='sm-underline' headingText={'hello heading'} />
         <CustomHeading size="x-sm" underline='sm-underline' headingText={'hello heading'} />
      </h1>
   )
}
export default HomePage