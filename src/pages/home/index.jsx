import CustomButton from "../../components/ui/custom-button"
import CustomHeading from "../../components/ui/custom-heading"


const HomePage = () => {
   return (
      <h1>
         <CustomHeading href={'/aaa'} size="lg" underline='lg-underline' headingText={'hello heading'} />
         <CustomHeading size="lg" underline='md-underline' headingText={'hello heading'} />
         <CustomHeading size="lg" underline='sm-underline' headingText={'hello heading'} />
         <CustomHeading size="x-sm" underline='sm-underline' headingText={'hello heading'} />


         <CustomButton btnText={'Know more about IEEE'} padding={'md-padding'} borderRadius={'1px'} />
         <CustomButton btnText={'See All News'} bgColor={'black'} color={'white'} size={'md-btn'} padding={'sm-padding'} />
         <CustomButton btnText={'Read More'} bgColor={'gray'} padding={'x-sm-padding'} borderRadius={'1px'} width={'full'} />
         <CustomButton btnText={'Read More'} color={'white'} bgColor={'skyBlue'} borderRadius={'5px'} />
         <CustomButton btnText={'Ask a Question'} bgColor={'orange'} borderRadius={'5px'} />
         <CustomButton btnText={'Go To Contact'} bgColor={'orange'} borderRadius={'30px'} padding={'lg-padding'} />
      </h1>
   )
}
export default HomePage