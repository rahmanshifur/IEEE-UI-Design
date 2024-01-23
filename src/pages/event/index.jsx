
import { Box, Container, Grid, Typography, styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useStoreState } from 'easy-peasy'
import Carousel from 'react-material-ui-carousel'
import CustomButton from "../../components/ui/custom-button"
import CustomHeading from "../../components/ui/custom-heading"
import { shortText } from "../../helper.js"

const EventPage = () => {
   const eventData = useStoreState(state => state.event.data)


   const latestUpdate = eventData.toSorted((a, b) => {
      if (a._id < b._id) {
         return 1
      }
      if (a._id > b._id) {
         return -1
      }
      return 0
   })
   const shorted = latestUpdate.slice(0, 3)

   return (
      <Container sx={{ my: '30px ' }}>
         <Grid container columnSpacing={7}>
            <Grid item lg={6} >
               <Box sx={{ marginBottom: '25px' }}>
                  <CustomHeading headingText={'FEATURED'} size={'lg'} underline={'sm-underline'} />
               </Box>
               <EventSlider>
                  {shorted?.map((item, i) =>
                     <CardItem>
                        <img src={item.image} height="350" width="100%" alt="" />
                        <EventDate>{item.date} {item.time}</EventDate>
                        <CardContent sx={{ padding: '20px 40px' }}>
                           <CustomHeading headingText={item.title} size={'lg'} />
                           <Discription>{shortText(item.description, 80)}</Discription>,
                           <Box sx={{ py: '20px' }}>
                              <CustomButton href={`/events/${item._id}`} btnText='View Details' />
                           </Box>
                        </CardContent>
                     </CardItem>)}
               </EventSlider>
            </Grid>
            <Grid item lg={6} >
               <Box sx={{ background: 'red' }}>
                  <Box>
                     <CustomHeading headingText={'FEATURED'} size={'lg'} underline={'sm-underline'} />
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Container>
   )
}

export default EventPage


const EventSlider = styled(Carousel)(() => ({
   position: 'relative',
   boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)',
   '.css-1m9128y': {
      display: 'none'
   },

}))
const Discription = styled(Typography)(() => ({
   color: "#9a9a9a",
   fontSize: "18px"
}))
const CardItem = styled(Card)(() => ({
   '.custom-button': {
      boxShadow: 'none',
      border: '1px solid #000',
      ":hover": {
         background: "#000",
         color: '#fff'
      }
   }
}))
const EventDate = styled(Typography)(() => ({
   color: "#626262",
   fontSize: "14px",
   background: "#f9f9f9",
   borderBottom: "1px solid #eee",
   padding: '20px 0px 20px 40px'

}))