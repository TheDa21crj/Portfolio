import React, { useEffect } from "react";

// Components
import Bio from "./../Components/Home/Bio";
import Header from "./../Components/Home/Header";
import Contact from "./../Components/Home/Contact";
import Services from "./../Components/Home/Services";
import Portfolio from "./../Components/Home/Portfolio";
import Nav from "./../Components/Nav";

export default function Home() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav leftTitle="My Portfolio" />
      <Header />
      <Bio />
      <Portfolio />
      <Services />
      <section id="ContactUS">
        <Contact />
      </section>
    </div>
  );
}
