"use client";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Layout
import Header from "@/app/pages/Header";
import Hero from "@/app/pages/Hero";
import Promo from "@/app/pages/Promo";
import About from "@/app/pages/About";
import Menu from "@/app/pages/Menu";
import CTA from "@/app/pages/CTA";
import Delivery from "@/app/pages/Delivery";
import Reviews from "@/app/pages/Reviews";
import Banner from "@/app/pages/Banner";
import Blog from "@/app/pages/Blog";
import Reservation from "@/app/pages/Reservation";
import Footer from "@/app/pages/Footer";


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <div>
      <Header />
      <Hero />
      <Promo />
      <About />
      <Menu />
      <CTA />
      {/* <Delivery />
      <Reviews />
      <Banner />
      <Blog /> */}
      <Reservation />
      <Footer/>
    </div>
    </ThemeProvider>
    </>
  );
}
