import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <section className="quoto-section center-text">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3><b>It does not matter how <span className="font-yellow">slowly you go,</span></b></h3>
              <h3><b>as long as you <span className="font-yellow">do not stop.</span>
                  </b></h3>
            </div>{/* col-sm-12 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    );
  }
}
