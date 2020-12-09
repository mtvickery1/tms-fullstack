import pdffile from '../../pdf/BOL.pdf';
import pdffile2 from '../../pdf/ebtms.pdf';
import samplePDF from './sample.pdf';

// PDF
import InLine from "../../components/Resources/InLine";


import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;






export default function Test() {


  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Viewport width
  const viewportWidth = window.innerWidth;

  // Brochure
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function setPdfWidth() {
    // Smaller than 720vw
    if (viewportWidth < 720) {
      console.log('viewportWidth:', viewportWidth)
      return 340
      // Larger than 992vw
    } else if (viewportWidth >= 992) {
      return 800
    }
  }


  // Lading
  const [numPages2, setNumPages2] = useState(null);
  const [pageNumber2, setPageNumber2] = useState(1);

  function onDocumentLoadSuccess2({ numPages2 }) {
    setNumPages2(numPages2);
    setPageNumber2(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (

    <React.Fragment>

      <div className='container-fluid navspace'>

        {/* ---------- Title ---------- */}
        <div className="row">
          <div className="col-md-12 text-center yellow-text mb-4">
            <h1>Documents</h1>
          </div>
        </div>



        {/* Both Docs */}
        <div className="row mb-5">

          {/* Brochure */}
          <div className="col-12 text-center mb-5">

            {/* Sub Header */}
            <div className="row">
              <div className="col-md-12 text-center white-text">
                <h4>TMS (Trade Managements Solutions - LP) Brochure</h4>
              </div>
            </div>

            {/* Brochure */}
            <div className="row">
              <div className="col-md-12">
                <Document
                  id='brochure'
                  file={pdffile2}
                  onLoadSuccess={onDocumentLoadSuccess}>

                  <Page
                    pageNumber={pageNumber} width={setPdfWidth()} />

                  {/* Page Number */}
                  <span id='brochure-page-number'>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</span>

                  {/* Next/Previous Buttons */}
                  <span id='brochure-page-next-prev'><button
                    className="btn white-btn btn-sm"
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                  >Previous</button>

                    <button
                      className="btn white-btn btn-sm"
                      type="button"
                      disabled={pageNumber >= numPages}
                      onClick={nextPage}
                    >Next</button></span>
                </Document>
              </div>
            </div>


            {/* View/Download Buttons */}
            <div className="row pt-1">
              <div className="col-md-12">
                {/* View */}
                <Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile2); }}><span id="" className="text-primary"><strong><button type="button" className="btn blue-btn">View</button></strong></span></Link>

                {/* Download */}
                <span id="" className="text-primary"><strong><button type="button" className="btn blue-btn"><a href={pdffile2} download>Download</a></button></strong></span>
              </div>
            </div>

          </div>




          {/* Bill of Lading */}
          <div className="col-12 text-center">

            {/* Sub Header */}
            <div className="row">
              <div className="col-md-12 text-center white-text">
                <h4>TMS Bill of Lading Terms and Conditions Document</h4>
              </div>
            </div>

            {/* PDF */}
            <div className="row mb-1">
              <div className="col-md-12">
                <InLine
                  id="bill" />
              </div>
            </div>


            {/* View/Download Buttons */}
            <div className="row">
              <div className="col-md-12">
                {/* View */}
                <Link to="route" onClick={(event) => { event.preventDefault(); window.open(pdffile); }}><span id="timeline" className="text-primary"><strong><button type="button" className="btn blue-btn">View</button></strong></span></Link>

                {/* Download */}
                <span id="timeline" className="text-primary"><strong><button type="button" className="btn blue-btn"><a href={pdffile} download>Download</a></button></strong></span>
              </div>
            </div>


          </div>





        </div>


      </div>

      <br />

    </React.Fragment>

  );
}