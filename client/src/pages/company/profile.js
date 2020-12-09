import React, { Component } from 'react';
import { useEffect } from 'react'


import imag1 from "../../images/trdm4.jpg";

import { Link } from 'react-router-dom';
import logo4 from '../../images/tms2.png';
// import Footer from '../../components/Footer/footer.js/index.js';
import mission from '../../images/ourmission.png';
import contactus from '../../images/contactus.png';
import hector from '../../images/hector.png';
import alex from '../../images/alex.png';
import alejandro from '../../images/alejandro.png';
import principal from '../../images/tms1.png'
import logo1 from "../../images/grupo_escalante_logo.png";
import logo2 from "../../images/qhelogo2.jpg";
import logo3 from "../../images/provalogo2.png";
import home from '../../images/air.jpg';

// Footer
import Footer from "../../components/Footer/footer"

import './company.css'

function MainServ() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <>
      {/*==================== TMS Profile ====================*/}
      <div className='container-fluid navspace'>

        {/* ---------- Title ---------- */}
        <div className="row">
          <div className="col-md-12 text-center yellow-text">
            <h1>Trade Management Solutions</h1>
          </div>
        </div>

        <br />

        {/* ---------- Body ----------*/}
        <div className="row text-center text-md-left">

          {/* Filler */}
          <div className="col-md-1 col-xl-2"></div>

          <div className="col-md-10 col-xl-8 profile-body">
            Trade Management Solutions (TMS) is a leading international supply chain provider specializing in import/export, customs brokerage, all modes of transportation, warehousing and distribution.
            Founded in 2005, TMS offers an end-to-end solution ensuring a supply chain’s efficiency, security, visibility and compliance. The company provides a full range of services while acting as a single point of contact for its clients.
            Headquartered in Round Rock, Texas, and with various locations throughout the U.S. and Mexico, TMS has an expansive footprint throughout the Caribbean,  Central America and South America while serving the global needs of its clients.
          </div>

          {/* Filler */}
          <div className="col-md-1 col-xl-2"></div>

        </div>

        <br /><br />

        {/* ==================== Leader Container ==================== */}



        {/* ========== Hector ========== */}
        <div className="row hector">

          {/* Filler */}
          <div className="col-md-1"></div>

          {/* {/* ---------- Content ---------- */}
          <div className="col-md-10 profile-body text-center text-md-left">
            <div className='row'>
              {/* Photo */}
              <div className="col-md-4 text-center col-v-centered">
                <img className="img-fluid rounded rounded-circle" src={hector} alt="" width="300" />
              </div>
              <div className="col-md-8">
                {/* Name */}
                <h2 className='white-text'><strong>Hector Quintanar</strong></h2>
                {/* Title */}
                <h3 className='blue-text'>President</h3>
                <br />
                Hector Quintanar has over 30 years of experience in both domestic and international High Tech markets along with diverse experience in quality, manufacturing, supply chain management, and project management.
                <br /><br />
                Mr. Quintanar holds a bachelor’s degree in Electrical Engineering from Instituto Politecnico in Mexico City, Mexico. He also trained in Manufacturing Incorporated Strategies from Harvard University in Boston, MA. Mr. Quintanar is also a founding partner of QHE Logistics - a worldwide transportation service, a partner of GES Returns - an asset recovery business, and partner of Trade Management Solutions - LP. A 4PL Supply Chain Integrator.
              </div>
            </div>

            <br />

            <div className="row">

              <div className="col-md-12">
                Mr. Quintanar began his career in Xerox Corporation and held multiple positions to key executive levels in Quality Assurance and Operations Management. In his career in XEROX Corporation, his responsibility included ISO 9002 certification, Business Process Improvement, Corporate strategies, and Manufacturing Operations.
                <br /><br />

                Mr. Quintanar also served in several senior management roles for Dell Inc. His responsibilities were in Manufacturing and Supply Chain related positions such as Mexico Re-configuration Plant Manager, Operations Manager, International Logistics Manager, and Project Leader for Latin America facilities start-up. During his 10-years at Dell Inc., Mr. Quintanar played a critical role in the international growth of the company.
                <br /><br />

                One of his key roles was establishing the Dell Direct Model of products supply from USA factories to the Latin-America market and leading of Dell Brazil Manufacturing Center start-up. During his assignment to the Brazil project, the team established the first RECOF approval (in-plant bonded warehouse with tax deferral capability) for any foreign company with Operations in Brazil. Lately Mr. Quintanar has managed to expand his companies with operations in Mexico City, Ensenada BC, Miami, FL and Austin Texas.
                <br /><br />

                With more than 200 associates across the different organizations and the recent expansion to 50 K Sq/Ft facility in Miami FL including FTZ , Bonded Warehousing and Second Touch/Value Added Logistics Services Mr. Quintanar’s companies being able to retain business with Fortune 500 corporations for the last 12 years.
                <br /><br />



              </div>
            </div>

          </div>

          {/* Filler */}
          <div className="col-md-1"></div>
        </div>

        {/* ========== Alejandro ========== */}
        <div className="row alejandro">

          {/* Filler */}
          <div className="col-md-1"></div>

          {/* {/* ---------- Content ---------- */}
          <div className="col-md-10 profile-body text-center text-md-left">
            <div className='row'>
              {/* Photo */}
              <div className="col-md-4 text-center col-v-centered">
                <img id='alejandro-img' className="img-fluid rounded rounded-circle" src={alejandro} alt="" width="300" />
              </div>
              <div className="col-md-8">
                {/* Name */}
                <h2 className='white-text'><strong>Alejandro Llorente</strong></h2>
                {/* Title */}
                <h3 className='blue-text'>Vice President</h3>
                <br />
                Alejandro Llorente has over 25 years of experience working for transnational companies within the retail, logistics and finacial sectors. His areas of expertise include: Logistics, Finance, Project Management, Planning, Warehousing, financial services, HR, IT, Finance Modeling, Quality, Business development and Coaching. Mr.Llorente has led TMS as the General Manager for the past 8 years, and has held management senior positions such as Chief Financial Officer of Red Bull Mexico, Chief Financial Officer for Covidien, Regional Process Improvement Director for American Express, as well as business consultant for Price Waterhouse Coopers. Mr.Llorente holds a Bachelor Degree in Business Administration and a Masters Degree in Finance.
              </div>
            </div>

          </div>

          {/* Filler */}
          <div className="col-md-1"></div>
        </div>

        {/* ========== Alex ========== */}
        <div className="row alex">

          {/* Filler */}
          <div className="col-md-1"></div>

          {/* {/* ---------- Content ---------- */}
          <div className="col-md-10 profile-body text-center text-md-left">
            <div className='row'>
              {/* Photo */}
              <div className="col-md-4 text-center col-v-centered">
                <img id='alex-img' className="img-fluid rounded rounded-circle" src={alex} alt="" width="300" />
              </div>
              <div className="col-md-8">
                {/* Name */}
                <h2 className='white-text'><strong>Alex Quintanar</strong></h2>
                {/* Title */}
                <h3 className='blue-text text-center text-md-left '>Chief Operations Officer</h3>
                <br />

                Alex Quintanar has over 10 years of experience working in the logistics sector. His areas of expertise include: International Commerce, Custom Brokerage, Project Management, Warehousing, Ocean/Air traffic, Business Development and Finance. Alex leads TMS traffic and Operations department as the Chief Operations Officer for the past 8 years, Alex holds a Bachelor Degree in Financial Management and has been certified and holds a License as Customer Broker.
                <br />

                One of his key roles has been to develop a new line of business at the Miami warehouse from FTZ Capabilities to Second Touch Services for computing equipment.

              </div>
            </div>

          </div>

          {/* Filler */}
          <div className="col-md-1"></div>
        </div>




      </div>

    </>

  );
}

export default MainServ;