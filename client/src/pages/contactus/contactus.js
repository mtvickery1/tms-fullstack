import React, { Component } from 'react';


// Axios
import axios from 'axios'
// const axios = require('axios');

// Media
import miamiTeam from '../../images/miami-team.jpg';
import miamiTeam1 from '../../images/TMS-Warehousefull.jpg'


import "./contact.css"

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      formError: false,
      opacity: 0
    }
  }


  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.listenToScroll)
    // window.scrollTo(0, 0)

    
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    console.log('winScroll:', winScroll)


    const height =
      document.documentElement.scrollHeight -
      1000
    console.log('scrollHeight:', document.documentElement.scrollHeight)
    console.log('clientHeight:', document.documentElement.clientHeight)

    let scrolled = winScroll / height
    console.log('scrolled:', scrolled)

    // Doesn't fade past set opacity
    if (winScroll >= 960) {
      scrolled = .79
    }

    this.setState({
      opacity: scrolled,
    }, () => console.log(this.state.opacity))
  }



  // Background Darken on Scroll
  // componentDidMount = () => {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = (event) => {
  //   console.log('event:', event)
  //   let scrollTop = event.srcElement.body.scrollTop,


  //     itemTranslate = Math.min(0, scrollTop / 3 - 60);
  //   console.log('scrollTop:', scrollTop)

  //   this.setState({
  //     opacity: itemTranslate
  //   });
  // }

  // FadeInSection = (props) => {
  //   const [isVisible, setVisible] = React.useState(false);
  //   const domRef = React.useRef();
  //   React.useEffect(() => {
  //     const observer = new IntersectionObserver(entries => {
  //       entries.forEach(entry => setVisible(entry.isIntersecting));
  //     });
  //     observer.observe(domRef.current);
  //   }, []);
  //   return (
  //     <div
  //       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
  //       ref={domRef}
  //     >
  //       {props.children}
  //     </div>
  //   );
  // }

  // -------------------------------------------------------------------
  // -------------------------------------------------------------------
  // -------------------------------------------------------------------

  getName = (e) => {
    let username = e.target.value;
    this.setState({
      name: username
    });
    console.log(this.state.name);
  }

  getEmail = (e) => {
    let userEmail = e.target.value;
    //the most important thing is that we use a RegEx
    //in order to manage the input of the email
    //at least we can get a some what valid email
    if (userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
      this.setState({
        email: userEmail
      });
    } else {
      this.setState({
        email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }

    console.log(this.state.email);
  }

  getDescription = (e) => {
    let userMessage = e.target.value;
    this.setState({
      message: userMessage
    });
    console.log(this.state.message);
  }

  //send the form
  submitForm = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({
        formError: true
      })
      return false;
    } else {
      this.setState({
        formError: false
      })
      console.log(`UserData: {
            Username: ${this.state.name},
            Email: ${this.state.email},
            Message: ${this.state.message}
        }`)

      console.log("form sent")

      var newCharacter = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };


      axios.post('/send', newCharacter)
        .then(function (response) {
          console.log(response);
          alert("sent email!");
        })
        .catch(function (error) {
          console.log(error);
        });


    }

  }

  render() {
    return (

      <React.Fragment>



          {/* Team Photo */}
          <div id='locations'>
            <img className="landing-space img-fluid m-x-auto d-block img-responsive"
              src={miamiTeam} />
            {/* <div id='locations-header' className='text-center'>Warehouse - Miami Facility</div> */}
          </div>

          {/* Darken BG */}
          <div className=''>

            <div id='contact' className='container'>

              {/* Locations Header */}
              <div className="row pt-3">
                <div className="col-md-12 text-center yellow-text">
                  <h1>Locations</h1>
                </div>
              </div>

              {/* Locations & Map */}
              <div className='row pt-3'>

                {/* Locations */}
                <div className="col-lg-4">
                  <div className='row max text-center'>

                    {/* Round Rock */}
                    <div className="col-md-6 col-lg-12 white-text my-auto">
                      <div id='headquarters' class="mb-3 rounded" >
                        <h4 class="blue-text">Headquarters</h4>
                        <div class="">
                          <div class="">1970 Rawhide Drive, Suite 316</div>
                          <div class="">Round Rock, TX 78681</div>
                          <div class="">Tel: (737) 717 3260</div>
                          <div class="">Fax: (512) 246-1913</div>
                        </div>
                      </div>
                    </div>

                    {/* Miami */}
                    <div className="col-md-6 col-lg-12 white-text my-auto">
                      <div id='warehouse' class="mb-3 rounded" >
                        <h4 class="blue-text">Warehouse</h4>
                        <div class="">
                          <div class="">2315 NW 107th Ave Unit A-30</div>
                          <div class="">Doral, FL 33172</div>
                          <div class="">Tel: (737) 717 3260</div>
                          <div class="">Fax: (512) 246-1913</div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Map */}
                <div id='map' className="col-lg-8">

                  <iframe className='rounded border border-dark rounded-circle' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13752.339157663093!2d-97.6818368!3d30.4903508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf71f0fa32e63bcb5!2sTrade%20Management%20Solutions%20LP!5e0!3m2!1sen!2sus!4v1570720937326!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>

                </div>


              </div>









              {/* Contact TMS */}
              <div className="row pt-3">
                <div className="col-md-12 text-center yellow-text">
                  <h1>Contact Us</h1>
                </div>
              </div>

              {/* Emails & Form */}
              <div className='row pt-3'>

                {/* Emails */}
                <div className="col-lg-4 mb-3">


                  <div id='emails' className="rounded max">



                    <div className='row max text-center'>

                      {/* General */}
                      <div className="col-12 white-text my-auto">
                        <div class="mb-3 rounded email" >
                          <h4 class="blue-text">General</h4>
                          <div class="">
                            <a href="mailto:customerservicetms@tms-lp.com"><span className="">customerservicetms@tms-lp.com</span></a>
                          </div>
                        </div>
                      </div>
                      {/* Finance */}
                      <div className="col-12 white-text my-auto">
                        <div class="mb-3 rounded email" >
                          <h4 class="blue-text">Finance</h4>
                          <div class="">
                            <a href="mailto:finance@tms-lp.com"><span className="">finance@tms-lp.com</span></a>
                          </div>
                        </div>
                      </div>
                      {/* Human Resources */}
                      <div className="col-12 white-text my-auto">
                        <div class="mb-3 rounded email" >
                          <h4 class="blue-text">Human Resources</h4>
                          <div class="">
                            <a href="mailto:hr@tms-lp.com"><span className="">hr@tms-lp.com</span></a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Contact Form */}
                <div className="col-lg-8">





                  <form id='contact-form' class="card-body mb-3 rounded">
                    <div class="form-group">
                      <label class="" for="exampleInputEmail1">Name</label>
                      <input onChange={this.getName} name='name' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>

                    <div class="form-group">
                      <label class="" for="email">Email Address</label>
                      <input onChange={this.getEmail} type="email" name="email" placeholder="Enter email" class="form-control" id="exampleInputPassword1" />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                      <label class="" for="exampleInputEmail1">What can we do for you?</label>
                      <textarea onChange={this.getDescription} maxLength="450" type="text" id="message" class="form-control" name="message" placeholder="Enter Message" rows="2" ></textarea>
                    </div>


                    <button type="submit" class="btn btn-primary" name="submit" value="Send" onClick={this.submitForm}>Submit</button>
                  </form>




                </div>


              </div>

            </div>

        </div>


        {/* Miami - Card */}
        {/* <div className="col-lg-6 text-center">
                  <div id='warehouse' class="card mb-3" >
                    <div class="card-header">Warehouse</div>
                    <div class="card-body">
                      <h5 class="card-title">Miami, FL</h5>
                      <div class="">2315 NW 107th Ave Unit A-30</div>
                      <div class="">Doral, FL 33172</div>
                      <div class="">Tel: (737) 717 3260</div>
                      <div class="">Fax: (512) 246-1913</div>
                    </div>
                  </div>
                  </div> */}

        {/* Contact TMS */}
        {/* <div className="row pt-4">
            <div className="col-md-12 text-center blue-text underline">
              <h1>Locations</h1>
            </div>
          </div> */}





      </React.Fragment >

    );
  }
}
export default Contactus;