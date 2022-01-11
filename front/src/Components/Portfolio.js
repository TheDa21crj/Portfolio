import React from "react";
import ProWork from "./ProWork";
import PCss from "./CSS/Portfolio.module.css";
import img0 from "../img/dance1.png";
import img1 from "../img/ecc.png";
import img2 from "../img/mern.png";
import img3 from "../img/api.png";
import img4 from "../img/CustomVid.png";
import img5 from "../img/memorygame.png";

export default function Portfolio() {
  return (
    <div className={PCss.mDiv} id="portfolio" data-aos="fade-up">
      <h1>Portfolio</h1>
      <div className={PCss.pDiv}>
        <ProWork
          img={img0}
          title="Dance Website"
          des="This a dance website with Amination on Scroll (AOS) effect as well as fully functional Backend"
          link={{ pathname: "https://github.com/TheDa21crj/Dance-site.git" }}
        />
        <ProWork
          img={img1}
          title="E-Commerce"
          des="It's a e-commerce responsive website with auto scroll and Amination on Scroll effect (AOS)"
          link={{ pathname: "https://github.com/TheDa21crj/-E-Commerce.git" }}
        />
      </div>
      <div className={PCss.pDiv}>
        <ProWork
          img={img2}
          title="MERN Stack"
          des="A website that consists of full functional Frontend and Backend with the use of jwt joken"
          link={{
            pathname: "https://github.com/TheDa21crj/MERN_Stack.Basic1.git",
          }}
        />
        <ProWork
          img={img3}
          title="Avatar Identifier"
          des="This a simple implementation of a third party API which is Joeschmoe.io"
          link={{
            pathname: "https://github.com/TheDa21crj/Joeschmoe.io.git",
          }}
        />
      </div>
      <div className={PCss.pDiv}>
        <ProWork
          img={img4}
          title="Custom Video Player"
          des="This is a custom video player made from scratch using Reactjs, matrialUI - for the icons."
          link={{
            pathname: "https://github.com/TheDa21crj/CustomVideoPlayer",
          }}
        />
        <ProWork
          img={img5}
          title="Memory Game"
          des="This is a simple memory game which includes some alert and also svg amination."
          link={{
            pathname: "https://github.com/TheDa21crj/MemoryGame",
          }}
        />
      </div>
    </div>
  );
}
