import { Box } from "@mui/material";
import { CustomTypography } from "../../style-component/custom-typography";


const CustomHeading = ({ size, headingText }) => {
   return (
      <Box>
         <CustomTypography size={size}>{headingText}</CustomTypography>
      </Box>
   )
}
export default CustomHeading;


//    backgroundColor: "#F7F9FF",
//    height: "auto",
//    [theme.breakpoints.up("sm")]: {
//      width: "574px",
//      padding: "60px",
//    },
//    [theme.breakpoints.down("sm")]: {
//      width: "100%",
//      padding: "15px",
//    },
//    borderRadius: "10px",
//    textAlign: "center",
//  }));