import React, { Component, useState } from "react";
import Nav from "./../Components/Error/Nav";
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
        <div>
          <nav>
            <button onClick={this.goToPrevPage}>Prev</button>
            <button onClick={this.goToNextPage}>Next</button>
          </nav>

          <div style={{ width: 600 }}>
            <Document file={CvPdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={600} />
            </Document>
          </div>

          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    );
  }
}

export default Cv;
