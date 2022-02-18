import React, { Component, useState } from "react";
import Nav from "./../Components/Error/Nav";
import CvCss from "./CSS/Cv.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import CvPdf from "./../pdf/Cv.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Cv extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Nav />
        <div></div>
      </div>
    );
  }
}

export default Cv;
