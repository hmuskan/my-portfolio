import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return(
      <div>
      <section className="education-section section">
       <div className="container">
         <div className="row">
           <div className="col-sm-4">
             <div className="heading">
               <h3><b>Education</b></h3>
               <h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
             </div>
           </div>{/* col-sm-4 */}
           <div className="col-sm-8">
             <div className="education-wrapper">
               <div className="education margin-b-50">
                 <h4><b>Bachelor of Technology in Information Technology</b></h4>
                 <h5 className="font-yellow"><b>Maharaja Surajmal Institute of Technology</b></h5>
                 <h6 className="font-lite-black margin-t-10">2017-2021</h6>
                 <h6 className="font-lite-black margin-t-10"> CGPA - 9.17/10</h6>
               </div>{/* education */}
               <div className="education margin-b-50">
                 <h4><b>Senior Secondary</b></h4>
                 <h5 className="font-yellow"><b>N.K. Bagrodia Public School, Dwarka</b></h5>
                 <h6 className="font-lite-black margin-t-10">Completed in 2017</h6>
                <h6 className="font-lite-black margin-t-10">Percentage - 95.2%</h6>
               </div>{/* education */}
               <div className="education margin-b-50">
                 <h4><b>Secondary</b></h4>
                 <h5 className="font-yellow"><b>N.K. Bagrodia Public School, Dwarka</b></h5>
                 <h6 className="font-lite-black margin-t-10">Completed in 2015</h6>
                 <h6 className="font-lite-black margin-t-10">CGPA - 10/10</h6>
               </div>{/* education */}
             </div>{/* education-wrapper */}
           </div>{/* col-sm-8 */}
         </div>{/* row */}
       </div>{/* container */}
     </section>
     <footer>
        <p className="copyright">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Base Template Design by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" >Colorlib</a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </footer>
     </div>
    )
  }
}
