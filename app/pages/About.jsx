import { Box, Container, Typography } from '@mui/material'
import { about } from '../lib/constants'
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import Button from '../components/Button'

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        position: 'relative',
        py: '40px',
      }}>
      <Container
        disableGutters
        component="div"
        sx={{
          px: "15px",
          mx: { sm: "auto" },
          width: { sm: "100%" },
          maxWidth: { sm: "550px", md: "720px", lg: "960px", xl: "1200px" },

          display: { lg: 'grid' },
          gridTemplateColumns: { lg: '1fr 1fr' },
          gap: { lg: '30px', xl: '60px' },
          position: 'relative',
        }}>

        <Box
          component='div'
          sx={{
            positon: 'relative',
            aspectRatio: '1/0.9',
          }}>
          <Box
            src={about.bannerImage.url}
            component='img'
            alt={about.bannerImage.alt}
            width={509}
            height={459}
            sx={{
              maxWidth: 'max-content',
              mx: 'auto',
              width: '100%',
              height: 'auto',
            }} />

          <Box
            component='img'
            src={about.redShape.url}
            alt={about.redShape.alt}
            width={216}
            height={226}
            sx={{
              position: 'absolute',
              top: '0',
              left: '100px',
              width: '216px',
              height: 'auto',
              animation: 'scaleUp 1s linear infinite alternate',
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Rubik',
              fontSize: {xs:"32px",lg:"42px"},
              fontWeight: 'semiBold',
              color: 'rgb(14, 14, 18)',
              letterSpacing: '-1px',
              lineHeight: 1.6,
              maxWidth: '15ch',
              mt: '40px',
              mb: '10px',
              mx: {xs: 'auto',md: '0'}
            }}>
            {about.title.text}
            <Box component='span' sx={{ display: 'inline', color: '#ff9d2e' }}>
              {about.title.highlight}
            </Box>
          </Typography>

          <Typography
            variant='p'
            sx={{
              fontFamily: 'Roboto',
              fontSize: '16px',
              color: '#787878',
              lineHeight: 1.2,
            }}>
            {about.description}
          </Typography>

          <Box
            component= "ul"
            sx={{
              mt: '20px',
              mb: '30px',
              pl: 0,
            }}>
            {about.facilities.map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  mb: '10px',
                  display: 'flex',
                  justifyContent: {xs:'center',md:'flex-start'},
                  alignItems: 'center',
                  gap: '10px',
                }}>
                <IoCheckmarkCircleOutline
                  style={{
                    backgroundColor: '#ff9d2e', 
                    color: 'white', 
                    fontSize: '24px', 
                    borderRadius: '50%', 
                    margin: 0,
                  }}/>
                  
                  <Box
                    component="span"
                    sx={{
                      fontFamily: 'Rubik',
                      fontSize: '18px',
                      fontWeight: 'medium',
                      color: '#0e0e12',
                      pl:0,
                    }}>
                      {item}
                  </Box>
              </Box>
            ))}
          </Box>
          <Button orange>
            Order Now
          </Button>
        </Box>



      </Container>

      <Box
        sx={{
          backgroundImage: 'url(/shape-grey.png)',
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

export default About