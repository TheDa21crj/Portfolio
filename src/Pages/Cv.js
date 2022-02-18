import React, { Component, useState } from "react";
import Nav from "./../Components/Error/Nav";
import CvCss from "./CSS/Cv.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import GetAppIcon from "@material-ui/icons/GetApp";
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
        <div className={CvCss.CvmDiv}>
          <div className={CvCss.CvBtnDiv}>
            <div className={CvCss.CvBtnDivLeft}>
              <p>Cv.pdf</p>
            </div>
            <div className={CvCss.CvBtnDivMiddle}>
              <button onClick={this.goToPrevPage} className={CvCss.prev}>
                Prev
              </button>
              <button onClick={this.goToNextPage} className={CvCss.next}>
                Next
              </button>
            </div>
            <div className={CvCss.CvBtnDivRight}>
              <a href={CvPdf} download>
                <GetAppIcon fontSize="large" className={CvCss.downloadIcon} />
              </a>
            </div>
          </div>
          <div>
            <Document file={CvPdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={800} />
            </Document>
          </div>
          <div>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
