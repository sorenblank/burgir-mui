import "../globals.css";
import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "../components/Button";

import { navigation } from "../lib/constants";
import Toggle from "../components/Toggle";

const Header = () => {
  // Initializing router and state for navigation toggle
  const [openNavigation, setOpenNavigation] = useState(false);

  /**
   * Toggles the navigation menu visibility and page scroll.
   */
  const toggleNavigation = () => {
    const isNavigationOpen = !openNavigation;
    setOpenNavigation(isNavigationOpen);

    // Disabling page scroll when navigation is open
    if (isNavigationOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };

  /**
   * Handles navigation link clicks.
   * Closes the navigation menu and enables page scroll if open.
   */
  const handleClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };
  return (
    <>
      <Box component="header" sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        py: "15px",
        bgcolor: "#fef1df",
        boxShadow: "0 2px 6px hsla(0, 0%, 0%, 0.1)"
      }}>
        <Container disableGutters component="div" sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          px: "15px",
          mx: "auto",
          width: {sm: "100%"},
          maxWidth: {sm:"550px", md: "720px", lg: "960px", xl:"1200px"},

        }}>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: 'Rubik',
              fontSize: 28,
              fontWeight: 'bold',
              letterSpacing: "-2px",
              color: '#0e0e12',
              '& a': {
                textDecoration: 'none',
                color: 'inherit',
                '& span': {
                  color: '#ff9d2e',
                  display: 'inline-block'
                }
              }
            }}
          >
            <a href="/">Burgir<span>.</span></a>
          </Typography>

          <Box
            component="nav"
            sx={{
              display: { xs: openNavigation ? 'flex' : 'none', lg: 'flex' },
              position: { xs: 'fixed', lg: 'static' },
              top: '3.9rem',
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: { xs: 'white', lg: 'transparent' },
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              ml: 'auto',
            }}
          >
            <Box
              component="div"
              sx={{
                position: 'relative',
                zIndex: 20,
                display: 'flex',
                flexDirection: {xs:'column',lg:'row'},
                gap: {lg:'5px'},
                alginItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
        
              }}>

            
            {navigation.map((item) => (
              <Box
                component="a"
                key={item.id}
                href={item.url}
                onClick={handleClick}
                sx={{
                  mx: { xs: 'auto', lg: 0 },
                  display: { lg: item.onlyMobile ? 'none' : 'block' },
                  fontFamily: 'Rubik',
                  fontSize: { xs: '24px', lg: '15px' },
                  color: '#0e0e12',
                  fontWeight: 'medium',
                  px: '10px',
                  py: '15px',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ff8d29',
                  },
                }}
              >
                {item.title}
              </Box>
            ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              alignItems: 'center',
              m: 0,
            }}
          >
            <Button
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
              orange
            >
              Reservation
            </Button>

            <Toggle clicked={openNavigation} onClick={toggleNavigation} />
          </Box>

        </Container>
      </Box>
    </>
  )
}

export default Header