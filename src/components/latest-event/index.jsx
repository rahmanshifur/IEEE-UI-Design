
import * as React from 'react';
import { styled, Box, Container, Grid, Typography, CardContent, Card, Button, CardActions } from "@mui/material"
import LatestEventImg from "../../assets/latest-vevnt/lastst-event.jpg"
import CustomImage from "../ui/custom-image"
import CustomHeading from "../ui/custom-heading"
import CustomButton from "../ui/custom-button"
import LatestNews from './lestst-news';

const LatestEvent = () => {
    return (
        <Box sx={{ py: '20px', bgcolor: '#F6F6F6;' }}>
            <Container>
                <Grid container spacing={2} >
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <CustomHeading headingText='LATEST EVENT' size='lg' underline='md-underline' />
                        <CardItem sx={{ mt: '20px' }}>
                            <CustomImage src={LatestEventImg} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <CustomHeading headingText='IEEE Day Celebrations' />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    IEEE NSU Student Branch has successfully conducted the festive event, “IEEE Day Celebrations” on 9th October, 2023, to commemorate the...
                                </Typography>
                            </CardContent>
                            <ButtonArea>
                                <CustomButton href='######' btnText='Read More' />
                            </ButtonArea>
                        </CardItem>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <LatestNews />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default LatestEvent

const CardItem = styled(Card)(() => ({
    borderRadius: '5px',
    '.custom-img': {
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
    },

}))
const ButtonArea = styled(Box)(() => ({
    padding: '0 20px 20px 20px',
    '.custom-button': {
        color: 'black',
        backgroundColor: '#E3E3E3',
        borderRadius: '0'
    }
}))

