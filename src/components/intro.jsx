import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (

        <section className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-lg-2" />
              <div className="col-md-10 col-lg-8">
                <div className="intro">
               <div className="profile-img"><img src="images/profile-1-250x250.JPG" alt="" /></div>
                  <h2><b>Muskan Hussain</b></h2>
                  <h4 className="font-yellow">Mobile and Web Development Enthusiast</h4>
                  <ul className="information margin-tb-30">
                    <li><b>BORN : </b>July 3, 1999</li>
                    <li><b>EMAIL : </b>muskan.huss@gmail.com</li>
                  </ul>
                  <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/in/muskanhussain-msit"><i className="ion-social-linkedin" /></a></li>

                    <li><a href="https://twitter.com/muskan_hussain"><i className="ion-social-twitter" /></a></li>
                    <li><a href="https://github.com/hmuskan"><i className="ion-social-github" /></a></li>
                  </ul>
                </div>{/* intro */}
              </div>{/* col-sm-8 */}
            </div>{/* row */}

          </div>{/* container */}
        </section>
      );
  }
}
