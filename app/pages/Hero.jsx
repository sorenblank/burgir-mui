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

        <Box
        component="figure"
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          top: { xs: 'calc(50% + 86px)', lg: 'auto' },
          transform: { xs: 'translateY(-50%)', lg: 'translateY(0)' },
          right: '50px',
          maxWidth: { xs: '40%', lg: '45%' },
          aspectRatio: '1 / 0.9',
          bottom: { lg: 0 },
        }}
      >
        <Box
          component="img"
          src={hero.bannerImage}
          width={820}
          height={716}
          alt="Burgir Bg"
          sx={{
            maxWidth: '100%',
            height: 'auto',
            transform: {
              xs: 'none',
              md: 'scale(1.4) translateX(44px) translateY(-20px)',
            },
          }}
        />
        <Box
          component="img"
          src={hero.burgerImage}
          width={700}
          height={637}
          alt="Burgir"
          sx={{
            maxWidth: '100%',
            height: 'auto',
            position: 'absolute',
            left: '30px',
            bottom: 0,

          }}
        />
      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          right: 0,
          bottom: '-2px',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom',
          pointerEvents: 'none',
          zIndex: -1,
          backgroundImage: `url(${hero.bgShape})`,
        }}
      />


      </Container>
    </Box>
  )
}

export default Hero