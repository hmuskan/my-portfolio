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
               <p className="font-semi-white margin-tb-30">Selected under Digital India Internship Scheme - 2019, under
the field of Mobile Governance, and underwent a training in git fundamentals, Python, MongoDB and API Development using Python Eve. Developed API and Frontend for the Pull Aborted Database
for DigiLocker, a secure cloud based platform for storage, sharing and verification of documents & certificates, conceived by the National e-Governance Division.
</p>

             </div>{/* experience */}
             <div className="experience margin-b-50">
               <h4><b>Intern Leader</b></h4>
               <h5 className="font-yellow"><b>The Sparks Foundation</b></h5>
               <h6 className="margin-t-10">JUNE 2019 - AUGUST 2019</h6>
               <p className="font-semi-white margin-tb-30">This was an extension to the internship at the same organisation, on the basis of my performance, I was asked to guide interns in the
               subsequent batches, abbout the app development task. I was responsible for taking sessions on Android App Development, and solving their doubts.</p>
               <ul className="list margin-b-30">
                 <li>Received Letter of Recommendation</li>
                 <li>Solved doubts of 10+ interns, and took sessions on Networking in Android using the Volley Library.</li>

               </ul>
             </div>{/* experience */}
             <div className="experience margin-b-50">
               <h4><b>Android Development Intern</b></h4>
               <h5 className="font-yellow"><b>The Sparks Foundation</b></h5>
               <h6 className="margin-t-10">APRIL 2019 - JUNE 2019</h6>
               <p className="font-semi-white margin-tb-30">The company organises Graduate Rotational Internship Program, where
students get a chance to get mentored in their field of interest. As an intern here, I developed 2 Android apps in each phase.</p>
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
               <p className="font-semi-white margin-tb-30">This internship was about creating video content for subjects related to Computer Science.
               20 short tutorial videos were created by me, on the topics: Discrete Mathematics and Object Oriented Programming.</p>
               
             </div>
           </div>{/* col-sm-8 */}
         </div>{/* row */}
       </div>{/* container */}
     </section>
    );
  }
}
