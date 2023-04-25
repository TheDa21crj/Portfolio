import React from "react";

// Components
import Bio from "./../Components/Home/Bio";
import Header from "./../Components/Home/Header";
import Contact from "./../Components/Home/Contact";
import Services from "./../Components/Home/Services";
import Portfolio from "./../Components/Home/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <Bio />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}
