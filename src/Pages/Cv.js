import React, { useState } from "react";
import Nav from "./../Components/Error/Nav";
import CvCss from "./CSS/Cv.module.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import CvPdf from "./../pdf/Cv.pdf";
import AttachmentIcon from "@material-ui/icons/Attachment";

export default function Cv() {
  return (
    <div className={CvCss.CvCmDiv}>
      <Nav />
      <div className={CvCss.CvmDiv}>
        <div className={CvCss.CvBtnDiv}>
          <div className={CvCss.CvBtnDivLeft}>
            <p>Cv.pdf</p>
          </div>
          <div className={CvCss.CvBtnDivMiddle}>
            <button className={CvCss.prev}>Prev</button>
            <button className={CvCss.next}>Next</button>
          </div>
          <div className={CvCss.CvBtnDivRight}>
            <a href={CvPdf} download>
              <GetAppIcon fontSize="large" className={CvCss.downloadIcon} />
            </a>
            <div>
              <a
                href="https://drive.google.com/file/d/1Thms9xiChIHvwO2qIDlVYkGU1rQz2__6/view?usp=sharing"
                target="_blank"
                id={CvCss.icon}
              >
                <AttachmentIcon
                  fontSize="large"
                  className={CvCss.downloadIcon}
                />
              </a>
              <p className={CvCss.pTag}>Open in Google Drive</p>
            </div>
          </div>
        </div>
        <div>
          <embed src={CvPdf} type="application/pdf" />
        </div>
        <div className={CvCss.pageDiv}>
          <p>Page 1 of 1</p>
        </div>
      </div>
    </div>
  );
}
