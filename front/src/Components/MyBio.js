import React from "react";
import { Link } from "react-router-dom";
import MybioCss from "./CSS/MyBio.module.css";
import img0 from "./../img/myBio.webp";

export default function MyBio() {
  return (
    <div className={MybioCss.mDiv} id="myBio" data-aos="fade-up">
      <div className={MybioCss.ResimgDiv}>
        <img src={img0} alt="" className={MybioCss.imgme} />
      </div>
      <div className={MybioCss.mybioText}>
        <h1>My Bio</h1>
        <p className={MybioCss.mBp}>
          Hi, I'm <b>Rishav Raj Singh</b>, a student at{" "}
          <b>Kalinga Institute of Industrial Technology</b> Deemed to Be
          University (2020-2024) who is currently studying in third semester in
          <b> Electronics and Computer Science Engineering</b>. I am a
          <b> workaholic</b>, <b>efficient</b> and a <b>trustworthy</b> person
          who excels in the field of Web Development. I possess excellent
          <b> interpersonal</b> skills and projects. I am well accommodated to
          the team environments.
        </p>
        <div className={MybioCss.barDiv}>
          <p>HTML</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb1}></div>
            <div className={MybioCss.gbDivV}>92%</div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>CSS</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb2}></div>
            <div className={MybioCss.gbDivV}>90%</div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>React</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb3}></div>
            <div className={MybioCss.gbDivV}>83%</div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>JavaScript</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb4}></div>
            <div className={MybioCss.gbDivV}>91%</div>
          </div>
        </div>
        <Link
          to={{
            pathname:
              "https://drive.google.com/file/d/1WDYi6048p4qThwOTgOxWg29mB_UYXjxm/view?usp=sharing",
          }}
          target="_blank"
          className={MybioCss.CvLink}
        >
          CV
        </Link>
      </div>
    </div>
  );
}
