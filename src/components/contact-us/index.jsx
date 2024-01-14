import styled from "@emotion/styled"
import { Box, Button, Container, Grid, Typography, } from "@mui/material"
import CustomButton from "../ui/custom-button"

const ContactCopmonent = () => {
    return (
        <Box sx={{ py: '40px', }}>

            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Contact> Contact us <ConatctSpan>if you would like to know more about us</ConatctSpan> </Contact>
                    </Grid>
                    <RightGrid item xs={12} md={6} lg={6}>
                       <Box>
                       <CustomButton
                            btnText="Contact us "
                            color='black'
                        />
                       </Box>
                    </RightGrid>
                </Grid>
            </Container>

        </Box>
    )
}
export default ContactCopmonent

const Contact = styled(Typography)(() => ({
    color: '#ffcc03',
    fontSize: '36px',
    fontWeight: '700',
    ':hover': {
        color: '#000'
    }
}))
const ConatctSpan = styled('span')(() => ({
    color: '#000',
    fontSize: '36px',
    fontWeight: '700',
}))

const RightGrid = styled(Grid)(() => ({
    
    textAlign: 'center',
    ':hover': {
       
        '.custom-button': {
            color: '#fff',
            backgroundColor: '#000',
        }
    },
    '.custom-button': {
        padding: '22px 45px',
        borderRadius: '50px',
        fontSize: '20px',
        fontWeight: '700',

    }
}))