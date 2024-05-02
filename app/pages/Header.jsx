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
        py: "14px",
        bgcolor: "#fef1df",
        boxShadow: "0 2px 6px hsla(0, 0%, 0%, 0.1)"
      }}>
        <Container component="div" sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",

          px: "15px",
          mx: {xs: "auto"},
          width: {xs: "100%"},
          maxWidth: {sm:"720px", md: "960px", lg: "1200px"},

        }}>

          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontFamily: 'Rubik',
              fontSize: 28,
              fontWeight: 'bold',
              letterSpacing: -2,
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
              display: { xs: openNavigation ? 'flex' : 'none', md: 'flex' },
              position: { xs: 'fixed', md: 'static' },
              top: { xs: '4.5rem' },
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: { xs: 'white', md: 'transparent' },
              zIndex: 20,
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              ml: 'auto',
              gap: { lg: '5px' }
            }}
          >
            {navigation.map((item) => (
              <Box
                component="a"
                key={item.id}
                href={item.url}
                onClick={handleClick}
                sx={{
                  display: { lg: item.onlyMobile ? 'none' : 'block' },
                  fontFamily: 'Rubik',
                  fontSize: { xs: '2xl', lg: '15px' },
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