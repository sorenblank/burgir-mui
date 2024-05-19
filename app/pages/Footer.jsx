import { footer } from "../lib/constants"

import { Box, Container, Typography } from "@mui/material"


const Footer = () => {
  return (
    <Box
      component="section">

        <Container
          sx={{
            px: "15px",
            mx: { sm: "auto" },
            width: { sm: "100%" },
            maxWidth: { sm: "550px", md: "720px", lg: "960px", xl: "1200px" },

            position:"relative",
            py: "24px",
            display: "flex",
            gap: "20px",
            flexDirection: {xs:"column", lg:"row"},
            justifyContent: {lg: "space-between"},
            alignItems: "center",
            verticalAlign: "middle",
          }}>

            <Typography
              sx={{
                fontFamily: "Rubik",
                fontSize: "16px",
                color: "#808080"
              }}>

                {footer.copyrightText}
            </Typography>

                <Box
                  component="ul"
                  sx={{
                    m:0,
                    p:0,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px"
                  }}>

                    {
                      footer.socialLinks.map((link,index) => (
                        <Box
                          key={index}
                          component="a"
                          href={link.url}
                          sx={{
                            textDecoration: "none",
                            display:"flex",
                            alignItems: "center",
                            width: "40px",
                            height: "40px",
                            borderRadius: "100%",
                            backgroundColor: "#e7e7e7",
                            '&:hover':{
                                backgroundColor: "#cccccc"
                            }
                          }}>
                            <Box
                              component="img"
                              src={link.icon}
                              alt={link.name}
                              width={16}
                              height={16}
                              sx={{
                                mx: "auto"
                              }} />
                        </Box>
                      ))
                    }

                </Box>
          
        </Container>

    </Box>
  )
}

export default Footer