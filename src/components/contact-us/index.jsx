import styled from "@emotion/styled"
import { Box, Container, Grid, Typography } from "@mui/material"
import CustomButton from "../ui/custom-button"

const ContactCopmonent = () => {
    return (
        <Box sx={{ py: '40px', }}>

            <Container>
                <Grid container >
                    <Grid item xs={12} md={6} lg={6} sx={{ display: "inline-block" }}>
                        <Typography sx={{
                            display: 'inline-block',
                            fontSize: '36px',
                            fontWeight: '700',
                        }}>
                            <span style={{ color: '#ffcc03', }}> Contact us </span> <span style={{ color: '#000', }}>if you would like to know more about us</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{ textAlign: 'center' }}>
                        <RightSection>
                            <CustomButton
                                btnText="Contact us "
                                color='black'
                                href='##'
                            />
                        </RightSection>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default ContactCopmonent


const RightSection = styled(Grid)(() => ({
    display: 'inline-block',
    '.custom-button': {
        padding: '22px 45px',
        borderRadius: '50px',
        fontSize: '20px',
        fontWeight: '700',

    },
    ':hover': {

        '.custom-button': {
            color: '#fff',
            backgroundColor: '#000',
        }
    }
}))