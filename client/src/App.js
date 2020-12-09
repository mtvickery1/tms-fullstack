import React, { Component, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// CSS
import './App.css';
import './pages/Home/Home.css';
import './pages/resources/resources.css';
import './components/Company/timeline.css'

// Pages
import Home from './pages/Home/home.js';

// Our Company
import Profile from "./pages/company/profile.js";
import Partnership from "./pages/company/partnership.js";

// Services
import Services from "./pages/services/services.js";
// import Destination from "./pages/services/destinationserv.js";
import Cfi from "./pages/services/cfi.js";

// Warehouse
import Ware from "./pages/services/warehouse.js";

// Resources
import Icote from "./pages/resources/incoterms.js";
import Docs from "./pages/resources/docs2.js";

// Contact
import Contactus from "./pages/contactus/contactus.js";


// import Gallery from "./pages/company/gallery.js";
// import Leader from "./pages/company/exleader.js";
// import Term from "./pages/resources/termcond.js";
// import Global from "./pages/company/globalser.js";


// Components
import Nav from "./components/Nav/navigation.js";
import Footer from "./components/Footer/footer";

// Suspense
// const Contactus = React.lazy(() => import('./pages/contactus/contactus.js'));



// const routes = [
//   { path: '/', name: 'Home', Component: Home },
//   { path: '/profile', name: 'Profile', Component: Profile },
//   { path: '/partnership', name: 'Partnership', Component: Partnership },
//   { path: '/gi', name: 'Gi', Component: Gi },
//   { path: '/services', name: 'Services', Component: Services },
//   // { path: '/destination', name: 'Destination', Component: Destination },
//   { path: '/cfi', name: 'Cfi', Component: Cfi },
//   { path: '/warehouse', name: 'Warehouse', Component: Ware },
//   { path: '/icote', name: 'Icote', Component: Icote },
//   { path: '/docs', name: 'Docs', Component: Docs },
//   { path: '/contactus', name: 'Contactus', Component: Contactus },
//   // { path: '/exleader', name: 'Leader', Component: Leader },
//   // { path: '/globalser', name: 'Global', Component: Global },
//   // { path: '/gallery', name: 'Gallery', Component: Gallery },
//   // { path: '/', name: 'Catchall', Component: Home }
// ]



class App extends Component {

  // Hide loader after component mounts
  // componentDidMount() {
  //   setTimeout(() => 
  // this.props.hideLoader()
  // , 500);
  // }

  render() {

    // Location to assist with page transitions
    const { match, location, history } = this.props


    return (


      <div>
        <Nav />

        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 400, exit: 400 }}
            classNames={'fade'}
          >

            <div className='page'>
              <Switch location={location}>
                {/* Home */}
                <Route exact path="/" component={Home}></Route>

                {/* Our Company */}
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/partnership" component={Partnership}></Route>

                {/* Services */}
                <Route exact path="/services" component={Services}></Route>
                {/* <Route exact path="/destination" component={Destination}></Route> */}
                <Route exact path="/cfi" component={Cfi}></Route>

                {/* Warehouse */}
                {/* <Route exact path="/warehouse" component={Ware}></Route> */}

                {/* Resources */}
                <Route exact path="/icote" component={Icote}></Route>
                <Route exact path="/docs" component={Docs}></Route>

                {/* Contact */}
                <Route exact path="/contactus" component={Contactus}></Route>
                {/* Suspense makes the catchall not work */}
                {/* <Suspense fallback={<div className='load'>Loading...</div>}>
                  <Route exact path="/contactus" component={Contactus}></Route>
                </Suspense> */}

                {/* <Route exact path="/exleader" component={Leader}></Route> */}
                {/* <Route exact path="/globalser" component={Global}></Route> */}


                {/* Not linked */}
                {/* <Route exact path="/gallery" component={Gallery}></Route> */}

                {/* Catch All */}
                <Route component={Home}></Route>
              </Switch>

              <Footer />
            </div>

          </CSSTransition>
        </TransitionGroup>

      </div>


      // Mapping version of routes found on react-transition-group website
      // <Router>
      //   <>
      //     <Nav />

      //       {routes.map(({ path, Component }) => (
      //         <Route key={path} exact path={path}>
      //           {({ match }) => (
      //             <CSSTransition
      //               in={match != null}
      //               timeout={{ enter: 300, exit: 300 }}
      //               classNames="fade"
      //               unmountOnExit
      //             >
      //               <div className="page">
      //                 <Component />
      //               </div>
      //             </CSSTransition>
      //           )}
      //         </Route>
      //       ))}

      //       {/* Catch All */}
      //       {/* <Route component={Home}></Route> */}

      //     <Footer />

      //   </>
      // </Router>



    );
  }
}

export default withRouter(App);
