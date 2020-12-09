import React, { Component } from 'react';


import logo1 from "../../images/grupo_escalante_logo.png";
import logo2 from "../../images/logos/qhe.png";
import logo3 from "../../images/provalogo2.png";
import ges from "../../images/ges.png";


function MobileTimeline() {


  return (

    <React.Fragment>

      {/* ==================== Partners Container ==================== */}
      <div className='container-fluid navspace'>

        {/* ---------- Title ---------- */}
        <div className="row">
          <div className="col-md-12 text-center yellow-text">
            <h1>Our Strategic Partnerships</h1>
          </div>
        </div>

        <br />

        {/* ---------- Body ----------*/}
        <div className="row mb-3">

          <div className="col-md-10 offset-md-1 profile-body">
            Our strategic partnerships with some of the top leaders in the logistics and transportation industries places us among the most influential supply chain services providers in North America & Latin America, offering a larger area of coverage and services for customers.
            <br /><br />
            With our team of dedicated global account managers, TMS offers the most innovative and effective Dock-to-Customer processes strengthening supply chains and increasing customer profitability.
          </div>

        </div>

        <div className="row">

          {/* QHE */}
          <div className='offset-md-1 col-md-10 mobile-partnerships rounded'>
            <div className="row">
              <div className="col-sm-4 pb-3 pb-md-0">
                <div className="logo text-center">
                  <img src={logo2} className="logo" width="70%" height="60%" />
                </div>
              </div>
              <div className="col-sm-8">
                <p className=""><h2 className=" text-center text-md-left blue-text"><strong>QHE Logistics</strong></h2></p>

                <p className=""><h3><small>
                  Via its in-house alliance, TMS and QHE Logistics optimize fulfillment processes for transit across the globe. Together we help clients better monitor, realize and manage their total logistics spend.</small></h3></p>

                <p><a target='_blank' href='http://www.qhe-logistics.com/'>qhe-logistics.com</a></p>

              </div>
            </div>
          </div>

          {/* Grupo Escalante */}
          <div className='offset-md-1 col-md-10 mobile-partnerships rounded'>
            <div className="row">
              <div className="col-sm-4 pb-3 pb-md-0">
                <div className="logo text-center">
                  <img src={logo1} className="logo" width="70%" height="60%" />
                </div>
              </div>
              <div className="col-sm-8">
                <p className=""><h2 className=" text-center text-md-left blue-text"><strong>Grupo Escalante</strong></h2></p>

                <p className=""><h3><small>
                Import/export customs brokerage firm, Grupo Escalante, and TMS have combined its industry experience and resources to create the most efficient and effective solution to managing a client’s supply chain to and from Mexico via a seamless border crossing process.</small></h3></p>

                <p><a target='_blank' href='http://www.escalante.com.mx'>escalante.com.mx</a></p>

              </div>
            </div>
          </div>

          {/* Prova */}
          <div className='offset-md-1 col-md-10 mobile-partnerships rounded'>
            <div className="row">
              <div className="col-sm-4 pb-3 pb-md-0">
                <div className="logo text-center">
                  <img src={logo3} className="logo" width="70%" height="60%" />
                </div>
              </div>
              <div className="col-sm-8">
                <p className=""><h2 className=" text-center text-md-left blue-text"><strong>PROVA Warehousing</strong></h2></p>

                <p className=""><h3><small>
                TMS and PROVA have partnered together to offer their clients more than 15,000 square meters of permanent/temporary warehousing at locations within Mexico City, Cancun, and Guadalajara. In conjunction with our warehousing capabilities, we can provide transportation and distribution centers throughout Mexico.</small></h3></p>

                <p><a target='_blank' href='http://www.provamexico.com'>provamexico.com</a></p>

              </div>
            </div>
          </div>

          {/* GES Returns Mexico */}
          <div className='offset-md-1 col-md-10 mobile-partnerships rounded'>
            <div className="row">
              <div className="col-sm-4 pb-3 pb-md-0">
                <div className="logo text-center">
                  <img src={ges} className="logo" width="70%" height="60%" />
                </div>
              </div>
              <div className="col-sm-8">
                <p className=""><h2 className=" text-center text-md-left blue-text"><strong>GES Returns Mexico</strong></h2></p>

                <p className=""><h3><small>
                An efficient Asset Recovery Business (ARB) to help preserve valuable natural resources.</small></h3></p>

                <p><a target='_blank' href='http://www.ges-returns.com'>ges-returns.com</a></p>

              </div>
            </div>
          </div>

        </div>

      </div>


    </React.Fragment>


  );
}

export default MobileTimeline;