import NetworkWifi2BarIcon from '@mui/icons-material/NetworkWifi2Bar';
import { Box, Paper } from "@mui/material";
import EventImg1 from '../../assets/feature-event-img/img1.jpg';
import CardItem from "../reuseable/card";
// import EventImg1 from '../../assets/feature-event-img/img1.jpg'
import EventImg2 from '../../assets/feature-event-img/img2.jpg';

const FeatureEvent = () => (
   <Box>
      <Paper sx={{ display: 'inline-block' }}>
         <CardItem
            headingText={'3D Point Cloud Object Recognition'}
            size={'md'}
            img={EventImg1}
            btnClr='white'
            btnSize='md'
            btnBgClr={'primary'}
            btnHref={'/d'}
         />
      </Paper>
      <CardItem
         headingText={'3D Point Cloud Object Recognition'}
         size={'md'}
         img={EventImg2}
         btnClr='green'
         btnHref={'/a'}
         href={'/aa'}
      />
      <CardItem
         headingText={'NETWORKING'}
         size={'md'}
         icon={<NetworkWifi2BarIcon sx={{ fontSize: 40 }} />}
      />
   </Box>
)

export default FeatureEvent