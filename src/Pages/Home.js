import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HomeCss from "./CSS/Home.module.css";
import Nav from "./../Components/Nav";
import Header from "./../Components/Header";
import MyBio from "./../Components/MyBio";
import Portfolio from "./../Components/Portfolio";
import Services from "./../Components/Services";
import ContactUs from "./../Components/ContactUs";
import Footer from "./../Components/Footer";
// import DarkMode from "./../Components/DarkMode";

export default function Home() {
  useEffect(() => {
    Aos.init({ offset: 180, duration: 1000 });
  }, []);
  return (
    <div className={HomeCss.HomemDiv}>
      {/* <DarkMode /> */}
      <Nav />
      <Header />
      <MyBio />
      <Portfolio />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}
