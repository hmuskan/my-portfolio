import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return(
      <section className="experience-section section">
       <div className="container">
         <div className="row">
           <div className="col-sm-4">
             <div className="heading">
               <h3><b>Work Experience</b></h3>
               <h6 className="font-lite-black"><b>PREVIOUS INTERNSHIPS</b></h6>
             </div>
           </div>{/* col-sm-4 */}
           <div className="col-sm-8">
             <div className="experience margin-b-50">
               <h4><b>Summer Intern</b></h4>
               <h5 className="font-yellow"><b>Ministry of Electronics and Information Technology, Govt. of India</b></h5>
               <h6 className="margin-t-10">JUNE 2019 - JULY 2019</h6>
               <p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                 quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,
                 eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
               <ul className="list margin-b-30">
                 <li>Selected under Digital India Internship Scheme - 2019, under
the field of Mobile Governance</li>
                 <li>Developed API and Frontend for the Pull Aborted Database
for DigiLocker</li>

               </ul>
             </div>{/* experience */}
             <div className="experience margin-b-50">
               <h4><b>Intern Leader</b></h4>
               <h5 className="font-yellow"><b>The Sparks Foundation</b></h5>
               <h6 className="margin-t-10">JUNE 2019 - AUGUST 2019</h6>
               <p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                 quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,
                 eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
               <ul className="list margin-b-30">
                 <li>Duis non volutpat arcu, eu mollis tellus.</li>
                 <li>Quis consequat nulla effi citur at.</li>
                 <li>Sed finibus aliquam neque sit.</li>
               </ul>
             </div>{/* experience */}
             <div className="experience margin-b-50">
               <h4><b>Android Development Intern</b></h4>
               <h5 className="font-yellow"><b>The Sparks Foundation</b></h5>
               <h6 className="margin-t-10">APRIL 2019 - JUNE 2019</h6>
               <p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                 quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,
                 eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
               <ul className="list margin-b-30">
                 <li>Phase 1: Created a credit management app, which allows
simple transfer of credit points between users</li>
                 <li>Phase 2: Created a user details app, that implements CRUD
operations from a given API, using Volley.</li>

               </ul>
             </div>
             <div className="experience margin-b-50">
               <h4><b>Teaching Assistant (Computer Science)</b></h4>
               <h5 className="font-yellow"><b>Service4Startup</b></h5>
               <h6 className="margin-t-10">OCTOBER 2018 - FEBRUARY 2019</h6>
               <p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                 quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,
                 eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
               <ul className="list margin-b-30">
               <li>Creating video content for subjects related to Computer Science.</li>
                <li>Successfully created content for Discrete Maths and Object Oriented Programming.</li>

               </ul>
             </div>
           </div>{/* col-sm-8 */}
         </div>{/* row */}
       </div>{/* container */}
     </section>
    );
  }
}
