
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, CardContent, styled, Typography } from "@mui/material"
import LatestNewsImgOne from "../../assets/latest-news/recent-event.jpg"
import VolunteerImg from "../../assets/latest-news/volunteer.png"
import CustomHeading from "../ui/custom-heading"
import CustomImage from '../ui/custom-image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CustomButton from '../ui/custom-button';


const LatestNews = () => {
    return (
        <Box>
            <CustomHeading headingText='RECENT NEWS' size='lg' underline='md-underline' />
            <RecentNewsCard>
                <CustomImage src={LatestNewsImgOne} />
                <CardContent sx={{ padding: '0 0 0 15px' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        <CustomHeading href='######' headingText='জাতীয় শোক দিবস ২০২৩' />
                    </Typography>
                    <Typography sx={{ alignItems: 'center', display: 'flex' }} color="text.secondary">
                        <span><DateRangeIcon /></span><span>17/01/2024</span>
                    </Typography>
                </CardContent>
            </RecentNewsCard>

            <SeeAllNewsButton>
                <CustomButton backgroundColor='black' btnText='See All Nesw' />
            </SeeAllNewsButton>

            <Volunteer sx={{ backgroundColor: 'black', marginTop: '20px' }}>
                <CustomHeading size='md' underline='md-underline' headingText='Volunteer of the Month' />
                <Box sx={{ padding: '10px' }}>
                    <CustomImage src={VolunteerImg} />
                </Box>
                <Typography sx={{ color: '#B7B7B7E6', textAlign: 'center' }}>Al Amin Hossain Joy</Typography>
            </Volunteer>
        </Box>
    )
}
export default LatestNews

const RecentNewsCard = styled(Link)(() => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    textDecoration: 'none',
    ':hover': {
        '.headding': {
            color: '#13aff0',
        }
    },
    '.custom-img': {
        width: '70px',
        height: '70px',
    },
    '.headding': {
        color: '#1b1a1aa1'
    }
}))

const SeeAllNewsButton = styled(Box)(() => ({
    '.custom-button': {
        color: 'white',
        backgroundColor: 'black',
    }
}))

const Volunteer = styled(Box)(() => ({
    padding: '8px',
    '.headding': {
        color: '#fff'
    },
    '.custom-img': {
        width: '100%', height: 'auto',
    }
}))