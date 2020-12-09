import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button, ButtonToolbar } from 'react-bootstrap';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Icons
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaChevronCircleUp } from 'react-icons/fa';
import { BiChevronUpCircle } from 'react-icons/bi';


// CSS
import "./footer.css";


class Footer extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (

      <React.Fragment>

        <div id='footer' className="container-fluid">

          {/* <!-- Scroll Up Button --> */}
          <div className='row darker p-2'>
            <div className='col-lg-12'>
              <div id="circle-up-container" className="text-center py-1">
                <FaChevronCircleUp size='2.6em' className="pointer" onClick={this.scrollToTop} />
                {/* <i className="fas fa-chevron-circle-up fa-2x pt-2 pb-2" onClick={this.scrollToTop}></i> */}
              </div>
            </div>
          </div>

          {/* Row */}
          <div className='row mt-3 p-3'>

            {/* ---------------------- Links Col ---------------------- */}
            <div id='links' className="col-lg-10 offset-lg-1  my-auto ">

              <div class="row">

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <Link exact to="/"><i className="fa fa-angle-double-right blue-text" /><span className='space'>Home</span></Link>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <Link exact to="/profile"><i className="fa fa-angle-double-right blue-text" /><span className='space'>About TMS</span></Link>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <Link exact to="/services"><i className="fa fa-angle-double-right blue-text" /><span className='space'>Our Services</span></Link>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <Link exact to="/partnership"><i className="fa fa-angle-double-right blue-text" /><span className='space'>Partnerships</span></Link>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <a target='_blank' href="http://apps.tms-lp.com/ORTrack/Tracking"><i className="fa fa-angle-double-right blue-text" /><span className='space'>Tracking</span></a>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <Link exact to="/contactus"><i className="fa fa-angle-double-right blue-text" /><span className='space'>Contact Us</span></Link>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <Link exact to="/icote"><i className="fa fa-angle-double-right blue-text" /><span className='space'>Incoterms</span></Link>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 p-1" >
                  <div className='link mx-auto'>
                    <Link exact to="/docs"><i className="fa fa-angle-double-right blue-text" /><span className='space'>Documents</span></Link>
                  </div>
                </div>

              </div>



            </div>


          </div>

          {/* Social media icons */}
          <div className='row social text-center pt-1 pb-1'>
            <div className='col-12'>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/tms-lp/" target="_blank"><span><FaLinkedinIn className="mr-1" /></span></a>
              {/* Twitter */}
              <a href="https://twitter.com/TMSolutionsLP" target="_blank"><span><FaTwitter /></span></a>
              {/* Email */}
              <a href="mailto:customerservicetms@tms-lp.com" target="blank"><span><FaEnvelope className="ml-1" /></span></a>
            </div>
          </div>

          <div className="row darker pt-3 pb-1">
            <div className="col-12 mt-2 text-center">
              <p><a className='' href="javascript:void();">© Copyright 2013 tms-lp.com All rights reserved.</a></p>
            </div>
          </div>
        </div>


      </React.Fragment>

    );
  }
}

export default Footer;
