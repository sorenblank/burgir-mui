// Libraries
import { useState, useEffect } from 'react';

// Constants
import { menu } from '../lib/constants'
import { Box, Container, Typography } from '@mui/material'

// Assets
import { IoStar } from "react-icons/io5"

const Menu = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredMenu, setFilteredMenu] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredMenu(menu.items);
    } else {
      setFilteredMenu(menu.items.filter(dish => dish.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  return (
    <Box
      component="section"
      id="about"
      sx={{
        textAlign: 'center',
        backgroundColor: '#faf7f2',
        py: { xs: '60px', lg: '120px' }
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

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Rubik',
            fontSize: "16px",
            textAlign: 'center',
            fontWeight: '500',
            color: '#f42f25',
          }}>
          {menu.subTitle}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Rubik',
            fontSize: "32px",
            mt: "10px",
            mb: "30px",
            mx: "auto",
            color: '#0e0e12',
            fontWeight: '600',
            letterSpacing: '-1px',
          }}>

          {menu.title.text}
          {" "}
          <Box
            component="span"
            sx={{
              color: '#ff9d2e',
            }}>
            {menu.title.highlight}
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Rubik',
            maxWidth: '44ch',
            fontSize: "16px",
            textAlign: 'center',
            color: '#787878',
            mb:'30px',
            mx: 'auto'
          }}>
            {menu.description}
        </Typography>

        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            mb: '40px',
            pl: '0px'
          }}>

          {
            menu.filterItems.map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  listStyle: 'none',
                }}>
                <Box
                  onClick={() => handleCategoryChange(item)}
                  sx={{
                    fontFamily: 'Rubik',
                    borderRadius: '6px',
                    fontWeight: '500',
                    px: '20px',
                    py: '5px',
                    cursor: 'pointer',
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: '#ededed',
                    backgroundColor: `${selectedCategory === "All" && item === "All" ? "#ff9d2e" : (selectedCategory === item ? "#ff9d2e" : "#ffffff")}`,
                    color: `${selectedCategory === "All" && item === "All" ? "#ffffff" : (selectedCategory === item ? "#ffffff" : "#0e0e12")}`
                  }}
                >
                  {item}
                </Box>
              </Box>
            )
            )
          }

        </Box>


        <Box
          component="ul"
          sx={{
            display: 'grid',
            gap: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            pl: "0",
            gridTemplateColumns: { md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          }}>

          {
            filteredMenu.map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  listStyle: 'none',
                }}>

                <Box
                  sx={{
                    bgcolor: '#ffffff',
                    p: "40px",
                    borderRadius: '12px',
                    // height: {lg:"100%"},
                    boxShadow: "0 1px 4px hsla(0, 0%, 0%, 0.2)",
                  }}>

                  <Box
                    sx={{
                      position: 'relative',
                      pt: "30px",
                      maxWidth: 'max-content',
                      aspeectRatio: '1/1',
                      mx: 'auto',
                    }}>

                    <Box
                      component="img"
                      src={item.image}
                      width="300"
                      height="300"
                      alt={item.dish}
                      sx={{
                        width: "100%",
                        height: "100%",
                      }} />

                    {
                      item.discount && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            backgroundColor: "#f42f25",
                            color: "#ffffff",
                            text: "12px",
                            rounded: "6px",
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            px: "15px",
                            py: "2px",
                            borderRadius: "6px"
                          }}>
                          -{item.discount}
                        </Box>
                      )
                    }
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-start" },
                      alignItems: "center",
                      gap: "15px",
                      mt: "20px",
                      mb: "10px"
                    }}>

                    <Typography
                      sx={{
                        fontFamily: "Rubik",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#787878"
                      }}>
                      Rating:
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        color: "#ff9d2e",
                        fontSize: "14px",
                      }}>
                      {
                        Array.from({ length: item.rating }, (_, i) => (
                          <IoStar key={i} />
                        ))
                      }
                    </Box>

                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "Rubik",
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#0e0e12",
                      letterSpacing: "-1px",
                      lineHeight: 1.2,
                      mb: "10px",
                      textAlign: {md: "left"},
                    }}>
                      {item.dish}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: {xs:'center', md:'flex-start'},
                      gap: '5px',
                      fontFamily: 'Rubik',
                      fontWeight: '500',
                    }}>
                      <Typography
                        sx={{
                          fontFamily: 'Rubik',
                          fontWeight: '500',
                          color: '#f42f25',
                          uppercase: 'capitalize',
                        }}>
                        PRICE:
                      </Typography>
                      <Box 
                        component="data"
                        sx={{
                          color: '#ff9d2e'
                        }}>
                        {item.price}
                      </Box>

                      <Box
                        component="del"
                        sx={{
                          color:"#bababa",
                        }}>
                          {item.previousPrice}
                      </Box>
                  </Box>

                </Box>

              </Box>
            ))
          }

        </Box>

      </Container>

    </Box>
  )
}

export default Menu