import { hero } from "../lib/constants"
import { Box, Container, Typography } from "@mui/material"
import Button from "../components/Button"

const Hero = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        backgroundImage: `url(${hero.bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        pt: '145px',
        pb: '60px',
        backgroundPosition: 'center',
        position: { md: 'relative' },
        textAlign: { xs: 'center', md: 'left' },
        overflow: { md: 'hidden' },
        zIndex: { md: 1 },
        minHeight: { lg: '450px', xl: '580px'},
        display: {lg: 'grid' },
        alignItems: { lg: 'center' },
      }}
    >
      <Container
        disableGutters
        component="div"
        sx={{
          px: "15px",
          mx: {sm: "auto"},
          width: {sm: "100%"},
          maxWidth: {sm:"550px", md: "720px", lg: "960px", xl:"1200px"},
        }}
      >

        <Box
          sx={{
            mx: { md: 0 },
          }}
        >

          <Typography
            variant="h6"
            sx={{
              color: '#ff8d29',
              fontFamily: 'Shadows Into Light',
              fontSize: { xs: "29px", sm: "32px" },
              letterSpacing: '1px',
              mx: { xs: "auto", sm: "auto", md: "auto" },
              mb: '25px',
            }}
          >
            {hero.title}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Rubik',
              fontSize: { xs: '32px', sm: "42px", md: '70px' },
              fontWeight: 'bold',
              color: '#f1d6c6',
              maxWidth: '12ch',
              mx: { xs: "auto", md: 0 },
              letterSpacing: { md: '-2.5px' },
              lineHeight: 1.2,
              letterSpacing: '-2px',
            }}
          >
            {hero.subTitle}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#e6caba',
              fontFamily: 'Roboto',
              fontSize: '16px',
              mx: { xs: 'auto', md: 0 },
              maxWidth: '44ch',
              mt: '15px',
              mb: '30px',
              fontSize: { md: '18px' },
            }}
          >
            {hero.description}
          </Typography>

          <Button
            sx={{
              mx: { xs: 'auto', md: 0 }
            }}
            orange
          >
            {hero.buttonText}
          </Button>

        </Box>

        {/* Hero Image Below */}

        


      </Container>
    </Box>
  )
}

export default Hero