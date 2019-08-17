import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <section className="quoto-section center-text">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="font-yellow"><b>There is no secret to success</b></h3>
              <h3><b>It is the result of preparation, <span className="font-yellow">Hard work</span>,
                  and learning from failures.</b></h3>
            </div>{/* col-sm-12 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    );
  }
}
