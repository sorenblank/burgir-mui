import { Box, Container, Typography } from "@mui/material"

import { cta } from "../lib/constants"
import Button from "../components/Button"

const CTA = () => {
  return (
    <Box
      component="section"
      id="CTA"
      sx={{
        position: 'relative',
        backgroundColor: '#f9f6f0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: { xs: 'center', md: "left" },
        overflow: 'hidden',
        py: "60px",
        pt: { lg: "120px" },
        pb: { lg: "60px" },
        backgroundImage: "url('/hero-bg.jpg')"
      }}>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: "auto",
          transform: "rotate(180deg)",
          width: "100%",
          height: "15px",
          backgroundRepeat: 'repeat',
          backgroundPosition: 'bottom',
          backgroundImage: 'url(/shape-grey.png)',
        }}>

      </Box>


      <Container
        disableGutters
        component="div"
        sx={{
          px: "15px",
          mx: { sm: "auto" },
          width: { sm: "100%" },
          maxWidth: { sm: "550px", md: "720px", lg: "960px", xl: "1200px" },

          display: { md: "grid" },
          gridTemplateColumns: { md: "1fr 1fr" },
          alignItems: { md: "center" },
          gap: { md: "30px" }
        }}>

        <Box>
          <Typography
            sx={{
              fontFamily: 'Rubik',
              fontSize: { xs: "32px", lg: "42px" },
              mt: "10px",
              mb: "30px",
              mx: "auto",
              color: '#ffffff',
              fontWeight: '600',
              lineHeight: "1.5",
              letterSpacing: '-2px',
              maxWidth: "17ch",
              mx: { xs: "auto", md: "0" },
            }}>

            {cta.title.text} {""}

            <Box
              component="span"
              sx={{
                color: '#ff9d2e'
              }}>
              {cta.title.highlight}
            </Box>
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Rubik',
              fontSize: "16px",
              mt: "25px",
              mb: "20px",
              color: '#ffffff',
            }}>
            {cta.description}
          </Typography>

          <Button
            orange
            sx={{
              alignItems: 'center',
              mx: { xs: "auto", md: "0" },
            }}>
            {cta.buttonText}
          </Button>
        </Box>

        <Box
          component="figure"
          sx={{
            position: 'relative',
            aspectRatio: '1/0.9',
          }}>
          <Box
            component="img"
            src={cta.bannerImage}
            width={700}
            height={637}
            alt="CTA Banner"
            sx={{
              width: '100%',
              height: 'auto',
              mx: 'auto',
              '@media (max-width:640px)': {
                transform: 'translateY(60px) scale(1.3)',
              },
              '@media (min-width:641px) and (max-width:1024px)': {
                transform: 'scale(1.3) translateX(0px) translateY(60px)',
              },
              '@media (min-width:1025px)': {
                transform: 'scale(1.6) translateX(20px) translateY(40px)',
              },
            }}
          />

          <Box
            component="img"
            src={cta.saleImage}
            width={216}
            height={216}
            alt="Sale Shape"
            sx={{
              position: 'absolute',
              transform: 'scale(1)',
              top: "50px",
              left: { xs: "10px", lg: "-50px" },
              scale: 1,
              animation: 'scaleUp 1s linear infinite alternate',
            }}
          />
        </Box>

      </Container>

      <Box
        sx={{
          backgroundImage: 'url(/shape-white.png)',
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '15px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'bottom',
        }}/>

    </Box>
  )
}

export default CTA