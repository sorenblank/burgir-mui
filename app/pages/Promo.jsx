import { Box, Container, Typography } from "@mui/material"
import { ImageListItem } from "@mui/material"
import { promo } from "../lib/constants"

const Promo = () => {
  return (
    <Box
      component="section"
      id="promo"
      sx={{
        backgroundColor: '#f9f6f0', // bg-issabeline
        py: '40px',
        textAlign: 'center',
        position: 'relative',
      }}>
      <Container
        disableGutters
        component="div"
        sx={{
          px: "15px",
          mx: { sm: "auto" },
          width: { sm: "100%" },
          maxWidth: { sm: "550px", md: "720px", lg: "960px", xl: "1200px" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Rubik',
            fontSize: "32px",
            py: "40px",
            color: '#0e0e12',
            textDecoration: 'underline',
            textUnderlineOffset: '12px',
            justifyContent: 'center',
            lineHeight: 1.2,
            letterSpacing: '-1px',
          }}>
          Our New&nbsp;<Box sx={{ color: "#ff9d2e", display: "inline" }}>Meals!</Box>
        </Typography>

        <Box
          component="ul"
          sx={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            pb: '40px',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              
              height: '12px',
              '&-button': {
                width: 'calc(25% - 40px)',
              },
              '&-track': {
                outline: '2px solid #ff9d2e',
                borderRadius: '2px',
              },
              '&-thumb': {
                border: '3px solid #f9f6f0',
                borderRadius: '12px',
              },
            },
          }}>

          {promo.map((item) => (
            <Box 
              component="li"
              key={item.id}
              sx={{
                overflow: 'hidden',
                minWidth: {xs:'100%',sm:'calc(50% - 5px)',lg:'calc(33.33% - 6.66px)',xl:'calc(26% - 7.5px)'},
                width: "100%",
                minHeight: '350px',
                backgroundColor: '#ffffff',
                scrollSnapAlign: 'start',
                borderRadius: '12px',
                listStyle: 'none',
                boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)",
              }}>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: {xs:'440px',lg:'400px'},
                    justifyContent: 'space-between',
                    position: 'relative',
                    px:'40px',
                    textAlign: 'center',
                    py: '30px',
                    zIndex: 1,
                  }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          my:'15px',
                          fontFamily: 'Rubik',
                          fontSize: "22px",
                          fontWeight: 'semiBold',
                          color: '#0e0e12',
                          letterSpacing: '-1px',
                          lineHeight: 1.2,
                          transition: '0.25s ease',
                        }}>
                        {item.cardTitle}
                      </Typography>

                      <Typography
                        variant="p"
                        sx={{
                          fontFamily: 'Roboto',
                          fontSize: "16px",
                          color: '#787878',
                          mb:'15px'
                        }}>
                        {item.cardDescription}
                      </Typography>
                    </Box>

                    <Box 
                      component="img"
                      src={item.cardImage}
                      alt={item.cardTitle}
                      width="300"
                      height="300"
                      sx={{
                        height: 'auto',
                        width: '100%',
                        maxWidth: 'max-content',
                        width: '100%',
                        mx: 'auto',
                        aspectRatio: '1/1',
                      }}/>
                    
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: '#ff8d29',
                        transform: 'scaleY(0.3)',
                        transformOrigin: 'bottom',
                        zIndex: '-1',
                        clipPath: 'polygon(0 40%, 100% 0%, 100% 100%, 0 100%)',
                        transition: '0.25s ease',
                        content: '""',
                      }}/>

                </Box>
            </Box>
          ))}

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

export default Promo