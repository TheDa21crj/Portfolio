import React from "react";
import MybioCss from "./CSS/MyBio.module.css";
import "./DarkModeCss/MyBio.css";
import img0 from "./../img/me.jpg";
import img from "./../img/dots.png.webp";
import CvPdf from "./../pdf/Cv.pdf";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useSelector } from "react-redux";

export default function MyBio() {
  const myState = useSelector((state) => state.darkmode);

  return (
    <div className={MybioCss.mDiv} data-aos="fade-up" id="myBio">
      <div className={MybioCss.dotsDiv}>
        <img src={img} alt="Me" />
      </div>
      <div className={MybioCss.ResimgDiv}>
        <img src={img0} alt="" className={MybioCss.imgme} />
      </div>
      <div className={MybioCss.mybioText}>
        <h1 className={MybioCss.myBioH1}>My Bio</h1>
        <p className={MybioCss.mBp}>
          Hi, I'm <b>Rishav Raj Singh</b>, a student at
          <b> Kalinga Institute of Industrial Technology</b> Deemed to Be
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
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV0" : ""}
            >
              92%
            </div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>CSS</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb2}></div>
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV1" : ""}
            >
              90%
            </div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>React</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb3}></div>
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV2" : ""}
            >
              93%
            </div>
          </div>
        </div>
        <div className={MybioCss.barDiv}>
          <p>JavaScript</p>
          <div className={MybioCss.fullL}>
            <div className={MybioCss.greenBar} id={MybioCss.gb4}></div>
            <div
              className={MybioCss.gbDivV}
              id={myState === true ? "darkgbDivV3" : ""}
            >
              91%
            </div>
          </div>
        </div>
        <div className={MybioCss.myBioBtnDiv}>
          <a href={CvPdf} download className={MybioCss.CvLink}>
            <p className={MybioCss.downloadtext}>Download CV</p>
            <p className={MybioCss.downloadIcon}>
              <GetAppIcon />
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/1hpp2Nq2_vWTh_Hnwbw7mj2xrpMXl8ZTS/view?usp=sharing"
            target="_blank"
            className={MybioCss.CvLink}
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
}
