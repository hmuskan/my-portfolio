import React, { Component } from 'react'

export default class TechnicalSkills extends Component {
  render() {
    return(
      <section className="skills-section section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 center-text">
              <div className="heading">
                <h3><b>Technical Skills</b></h3>
                <h6 className="font-lite-black"><b>I'M GOOD AT</b></h6>
              </div>
            </div>{/* col-sm-12 */}
            <div className="col-sm-12 col-md-6">
              <h4><b>Mobile App Development</b></h4>
              <h6 className="expert">Native Android Apps</h6>
              &nbsp;  <h6 className="expert">PhoneGap</h6>
              <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                quis consequat nulla effi citur at.</p>
            </div>{/* col-md-6 */}
            <div className="col-sm-12 col-md-6">
              <h4><b>Web Development</b></h4>
              <h6 className="expert">HTML</h6>
             &nbsp; <h6 className="expert">CSS</h6>
             &nbsp; <h6 className="expert">JavaScript</h6>
              <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                quis consequat nulla effi citur at.</p>
            </div>{/* col-md-6 */}
            <div className="col-sm-12 col-md-6">
              <h4><b>Databases</b></h4>
              <h6 className="expert">MongoDB</h6>
             &nbsp; <h6 className="expert">SQL</h6>
              <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                quis consequat nulla effi citur at.</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h4><b>API Development</b></h4>
              <h6 className="expert">Python Eve Framework</h6>

              <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                quis consequat nulla effi citur at.</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h4><b>Programming Concepts</b></h4>
              <h6 className="expert">Data Structures</h6>
             &nbsp; <h6 className="expert">Algorithms</h6>
              <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                quis consequat nulla effi citur at.</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h4><b>Programming Languages</b></h4>
              <h6 className="expert">Java</h6>
             &nbsp; <h6 className="expert">Python</h6>
               &nbsp; <h6 className="expert">C++</h6>
               &nbsp; <h6 className="expert">Kotlin</h6>
              <p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                quis consequat nulla effi citur at.</p>
            </div>
          </div>{/* row */}
        </div>{/* container */}
      </section>
    );
  }
}
