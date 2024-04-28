import "../globals.css";
import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";


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
        py: 1, // 14px, adjust as needed
        bgcolor: "#fef1df",
        boxShadow: "0 2px 6px hsla(0, 0%, 0%, 0.1)"
      }}>
        <Container component="div" sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          '@media (min-width:640px)': {
            mx: "auto",
            width: "100%",
            maxWidth: "550px"
          },
          '@media (min-width:768px)': {
            maxWidth: "720px"
          },
          '@media (min-width:1024px)': {
            maxWidth: "960px"
          },
          '@media (min-width:1280px)': {
            maxWidth: "1200px"
          }
        }}>

          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontFamily: 'Rubik',
              fontSize: 28,
              fontWeight: 'bold',
              letterSpacing: -2,
              color:  'var(--saffron)',
              '& a': {
                textDecoration: 'none',
                color: 'inherit',
                '& span': {
                  color: 'var(--saffron)',
                  display: 'inline-block'
                }
              }
            }}
          >
            <a href="/">Burgir<span>.</span></a>
          </Typography>

        </Container>
      </Box>
    </>
  )
}

export default Header