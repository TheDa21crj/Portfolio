import React from "react";
import Header from "./../Components/Home/Header";
import Bio from "./../Components/Home/Bio";
import Portfolio from "./../Components/Home/Portfolio";
import Services from "./../Components/Home/Services";
import Contact from "./../Components/Home/Contact";

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
