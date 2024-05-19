import { reservation } from "../lib/constants"

import Button from "../components/Button"

import { Box, Container, Typography, TextField, Select, MenuItem, TextareaAutosize } from "@mui/material"

const Reservation = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        color: '#fff',
        position: 'relative',
        py: "60px",
        pt: { lg: "120px" },
        pb: { lg: "60px" },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        borderBottom: '2px solid #c5c4cc',
        backgroundImage: "url('/footer-illustration.png')"
      }}>

      <Container
        disableGutters
        component="div"
        sx={{
          px: "15px",
          mx: { sm: "auto" },
          width: { sm: "100%" },
          maxWidth: { sm: "550px", md: "720px", lg: "960px", xl: "1200px" },
        }}>

        <Box
          sx={{
            display: "grid",
            gap: "60px",
            gridTemplateColumns: { md: "repeat(2, 1fr)" },
          }}>

          <Box
            component="form"
            sx={{
              backgroundColor: "#fff",
              p: "30px",
              border: "1px solid #ededed",
              borderRadius: "8px",
              boxShadow: "0 1px 2px hsla(0, 0%, 0%, 0.2)",
              alignItems: "left",
              display: "flex",
              flexDirection: "column",
            }}>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}>

              <Typography
                sx={{
                  position: "relative",
                  color: "#0e0e12",
                  minWidth: "max-content",
                  fontSize: "22px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  letterSpacing: "-1px",
                  mb: "20px",
                }}>

                {reservation.form.formTitle}

                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "calc( 100% + 15px )",
                    backgroundColor: "#ff9d2e",

                    width: "50px",
                    height: "4px",

                    borderRight: "5px solid #ff9d2e",

                    boxShadow: "inset -5px 0px 0px 0px #ffffff"
                  }}
                />

              </Typography>

            </Box>

            <Box
              sx={{
                display: "grid",
                gap: "10px",
                mb: "10px",
                gridTemplateColumns: { md: "repeat(2, 1fr)" }
              }}>

              <Box
                required
                component="input"
                type="text"
                placeholder="Name"
                sx={{
                  p: "10px",
                  color: "#9ca3af",
                  border: "1px solid #ededed",
                  borderRadius: "6px",
                  fontSize: "16px",
                  color: "#9ca3af"
                }}>

              </Box>

              <Box
                required
                component="input"
                type="email"
                placeholder="Email"
                sx={{
                  p: "10px",
                  color: "#9ca3af",
                  border: "1px solid #ededed",
                  borderRadius: "6px",
                  fontSize: "16px",
                  color: "#9ca3af"
                }}>

              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gap: "10px",
                mb: "10px",
                gridTemplateColumns: { md: "repeat(2, 1fr)" }
              }}>

              <Box
                required
                component="select"
                type="text"
                placeholder="Name"
                sx={{
                  p: "0px !important",
                  color: "#9ca3af",
                  border: "1px solid #ededed",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontFamily: "Rubik",
                  color: "#9ca3af"
                }}>

                <Box
                  component="option"
                  value="Person"
                  disabled
                  selected>
                  Person
                </Box>

                <Box
                  component="option"
                  value="2"
                  disabled
                  selected>
                  2 Person
                </Box>

                <Box
                  component="option"
                  value="3"
                  disabled
                  selected>
                  3 Person
                </Box>

                <Box
                  component="option"
                  value="4"
                  disabled
                  selected>
                  4 Person
                </Box>

                <Box
                  component="option"
                  value="5"
                  disabled
                  selected>
                  5 Person
                </Box>

              </Box>

              <Box
                required
                component="input"
                type="date"
                placeholder="mm/dd/yyyy"
                sx={{
                  fontFamily: "Rubik",
                  color: "#9ca3af",
                  p: "10px",
                  color: "#9ca3af",
                  border: "1px solid #ededed",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}>

              </Box>
            </Box>

            <Box
              required
              component="textarea"
              placeholder="Message"
              sx={{
                p: "10px",
                color: "#9ca3af",
                border: "1px solid #ededed",
                borderRadius: "6px",
                fontSize: "16px",
                minHeight: "130px",
                resize: "none",
                fontFamily: "Rubik",
                width: "95%"
              }}>

            </Box>

            <Button
              sx={{
                mt: "15px",
                mx: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}>
              Book Now
            </Button>

          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "repeat(1, 1fr)" },
              gap: "20px",
            }}>

            {
              reservation.sections.map((section, index) => (
                <Box key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                      mb: "10px"
                    }}>
                    <Typography
                      sx={{
                        position: "relative",
                        minWidth: "max-content",
                        fontSize: "24px",
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        letterSpacing: "-1px",
                        color: "#0e0e12"
                      }}>
                      {section.title}
                      <Box
                        component="span"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                          left: "calc( 100% + 15px )",
                          backgroundColor: "#ff9d2e",

                          width: "50px",
                          height: "4px",

                          borderRight: "5px solid #ff9d2e",

                          boxShadow: "inset -5px 0px 0px 0px #ffffff"
                        }} />
                    </Typography>
                  </Box>

                  <Box>
                      {
                        section.description.map((desc, index) => (
                          <Typography
                            key={index}
                            sx={{
                              fontFamily: "Rubik",
                              fontSize: "16px",
                              color: "#0e0e12",
                            }}>

                              {desc.title}: {" "}

                              <Box
                                component="span"
                                sx={{
                                  color: "#ff8d29"
                                }}>
                                  {desc.info}
                              </Box>

                          </Typography>
                        )
                      )
                      }
                  </Box>
                </Box>
              ))
            }

          </Box>

        </Box>

      </Container>

    </Box>
  )
}

export default Reservation