import React, { Component } from 'react';
import { useEffect } from 'react'

// Footer
import Footer from "../../components/Footer/footer";



// import Footer from '../../components/Footer/footer.js/index.js';
// import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
//   "mdbreact";
import pic1 from '../../images/gruint.png';
import principal from '../../images/tms1.png';

function Imagen() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <React.Fragment>

      <div className='container-fluid my-5'>

        {/* ---------- Title ---------- */}
        <div className="row">
          <div className="col-md-12 text-center yellow-text">
            <h1>Group Infrastructure</h1>
          </div>
        </div>

        {/* BREAK */}
        <br />

        <div className="row">
        <div className="col-md-12 text-center yellow-text">

            <img className='gi-container img-fluid p-3 rounded' src={pic1} />

          </div>
        </div>

        {/* BREAK */}
        <br />


      </div>



    </React.Fragment>


  );
}
export default Imagen;
