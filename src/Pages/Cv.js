import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Nav from "./../Components/Error/Nav";
// import CvPdf from "./../pdf/Cv.pdf";

export default function Cv() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Nav />
      <div>
        <Document file="./Cv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}
