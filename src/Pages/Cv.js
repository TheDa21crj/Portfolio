import React from "react";
import Nav from "./../Components/Error/Nav";
import CvPdf from "./../pdf/Cv.pdf";

export default function Cv() {
  return (
    <div>
      <Nav />
      <div>
        <embed src={CvPdf} type="application/pdf" />
      </div>
    </div>
  );
}
