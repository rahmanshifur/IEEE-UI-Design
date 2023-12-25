import CustomHeading from "../../components/ui/custom-heading"


const HomePage = () => {
   return (
      <h1>
         <CustomHeading size="lg" headingText={'hello heading'} />
         <CustomHeading size="md" />
         <CustomHeading size="sm" />
      </h1>
   )
}
export default HomePage