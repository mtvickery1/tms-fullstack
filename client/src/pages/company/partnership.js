import React, { Component } from 'react';
import Timeline from "../../components/Company/Timeline";
import MobileTimeline from "../../components/Company/MobileTimeline";
import Gi from "../../components/Company/gi";


// Viewport width
const viewportWidth = window.innerWidth;

class Partnerships extends Component {

  componentDidMount() {
    // Scroll to top on load
    window.scrollTo(0, 0)
    // Viewport width
    console.log('viewportWidth:', viewportWidth)

  }

  render() {

    return (viewportWidth > 991) ? (
      <div>
        <Timeline />
        <Gi />
      </div>
    ) : (
        <div>
          <MobileTimeline />
          <Gi />
        </div>
      );

  }
}

export default Partnerships;