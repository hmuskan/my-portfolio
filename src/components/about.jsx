import React,  { Component } from 'react'

export default class About extends Component {
  render() {
    return(
      <section className="about-section section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="heading">
                <h3><b>About me</b></h3>
                <h6 className="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
              </div>
            </div>{/* col-sm-4 */}
            <div className="col-sm-8">
              <p className="margin-b-50">A quick learner with an insatiable appetite for all
things tech. Experienced with Android
Development, and stepping into new fields, one line
of code at a time.</p>

            </div>{/* col-sm-8 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    );
  }
}
