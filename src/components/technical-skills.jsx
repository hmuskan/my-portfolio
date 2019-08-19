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
              <p className="margin-tb-30">I have an intermediate level proficiency in native Android App Development using Java
              and currently working on expanding my skillset to Kotlin as well. I was exposed to cross platform development using PhoneGap during my previous internship, and exploring that field as well. </p>
            </div>{/* col-md-6 */}
            <div className="col-sm-12 col-md-6">
              <h4><b>Web Development</b></h4>
              <h6 className="expert">HTML</h6>
             &nbsp; <h6 className="expert">CSS</h6>
             &nbsp; <h6 className="expert">JavaScript</h6>
              <p className="margin-tb-30">A beginner in Web Development, I am learning to create responsive webpages, with a crisp UI.
              I have familiarised myself with the basics, and also created a frontend for the API created by me for DigiLocker.</p>
            </div>{/* col-md-6 */}
            <div className="col-sm-12 col-md-6">
              <h4><b>Databases</b></h4>
              <h6 className="expert">MongoDB</h6>
             &nbsp; <h6 className="expert">SQL</h6>
              <p className="margin-tb-30">I have a fairly good knowledge of working with both Database Management Systems, and connecting them to a Python Script using PyMongo and SQLAlchemy.</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h4><b>API Development</b></h4>
              <h6 className="expert">Python Eve Framework</h6>

              <p className="margin-tb-30">I have learnt to build REST APIs using Python's Eve Framework, and created an API using this, for the DigiLocker Platform.
              Also exploring other frameworks to create APIs.</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h4><b>Programming Concepts</b></h4>
              <h6 className="expert">Data Structures</h6>
             &nbsp; <h6 className="expert">Algorithms</h6>
              <p className="margin-tb-30"></p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h4><b>Programming Languages</b></h4>
              <h6 className="expert">Java</h6>
             &nbsp; <h6 className="expert">Python</h6>
               &nbsp; <h6 className="expert">C++</h6>
               &nbsp; <h6 className="expert">C</h6>
              <p className="margin-tb-30"></p>
            </div>
          </div>{/* row */}
        </div>{/* container */}
      </section>
    );
  }
}
