import { Box, Container, Grid, Typography } from "@mui/material"
import { useStoreState } from "easy-peasy"
import { useParams } from "react-router-dom"
import CustomHeading from "../../components/ui/custom-heading"

const EventDetails = () => {
   const params = useParams()

   console.log('id', params.id)
   const data = useStoreState(state => state.event.data)

   return (
      <Box>
         <Container sx={{ padding: '20px 10px 30px 10px' }}>
            <Grid container collums={12} columnSpacing={2}>
               <Grid item lg={8} >
                  {data.map((item) => item._id === params.id &&
                     <Box >
                        <Box border={'1px solid #000'}>
                           <img src={item.image} alt="img" width={'100%'} height={"100%"} />
                        </Box>
                        <Box padding={'10px 0px'}>
                           <CustomHeading headingText={item.title} size={'lg'} />
                        </Box>
                        <Typography sx={{ padding: "20px 0px 40px 0px" }}>{item.description}</Typography>
                     </Box>
                  )}
               </Grid>
               <Grid item lg={4} >sdf</Grid>
            </Grid>
         </Container>
      </Box>
   )
}

export default EventDetails