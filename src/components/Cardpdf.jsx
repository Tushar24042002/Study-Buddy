import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { MobilePDFReader } from 'react-read-pdf';

// const pageNavigationPluginInstance = pageNavigationPlugin();
// const { GoToFirstPage, GoToLastPage, GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;
import { RenderGoToPageProps } from '@react-pdf-viewer/page-navigation';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Cardpdf(props) {
    const [openFirst, setOpenFirst] = React.useState(false);
    const [openSecond, setOpenSecond] = React.useState(false);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pageScale, setPageScale] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function handleZoomIn() {
        if (pageScale < 3) {
            setPageScale(pageScale + 0.2);
        }
    }

    function handleZoomOut() {
        if (pageScale > 0.3) {
            setPageScale(pageScale - 0.2);
        }
    }

    function handleNext() {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    }
    function handlePrevious() {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    }

    return (
        <div>


            {/* <a href={props.downloadlink} download={props.downloaddate} onClick={() => setOpenFirst(true)}> */}
            <div className="card" >
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="description">
                            <h4>{props.itemdesc}</h4>
                            <div className="d-flex mt-2">
                                <div className="btn btn-primary btn-sm px-4 me-2" onClick={() => setOpenFirst(true)}><span className="m-hide">Online</span> View</div>
                                <a href={props.downloadlink}>
                                    <div className="btn btn-success btn-sm px-4">Download <span className="m-hide"> Pdf</span></div>
                                </a>
                            </div>
                        </div>


                        <a href={props.downloadlink}>
                            <div className="icon-box" data-toggle="tooltip" data-placement="top" title="Download The File">
                                <img src="assets/images/academic/pdf.png" alt="" width="100%" />
                            </div>
                        </a>
                    </div>


                </div>
            </div>
            {/* </a> */}



            <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
                {/* <div className="m-hide"> */}
                <div className="container height">
                    <div className="row">
                        <div className="col-lg-12 px-0">
                        <Document file={props.downloadlink} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                        </div>
                    </div>
                </div>
               
                {/* </div> */}
               {/* <div className="pc-hide">
               <MobilePDFReader file={props.downloadlink}/>
               </div> */}
              


                <div className="footer">
                <p className='mb-2 pagesss'>
                        Page {pageNumber} of {numPages}
                    </p>
                    <div className="button-container">
                        <button onClick={handlePrevious} disabled={pageNumber === 1} className="btn btn-primary me-2 px-3">
                            ‹ Previous
                        </button>
                        <button onClick={handleNext} disabled={pageNumber === totalPages} className="btn btn-primary px-3">
                            Next ›
                        </button>
                    </div>
                </div>

            </Modal>

        </div>
    )
}
