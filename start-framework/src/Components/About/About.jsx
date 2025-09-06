import React from 'react'
import Star from './../Star/Star';

export default function About() {
  return (
    <>
     <div className="about vh-90 d-flex align-items-center justify-content-center">
          <div className="inner  text-white d-flex align-items-center flex-column">
              <h2 className='fw-bold fs-1 text-uppercase'>About Component</h2>
            <Star color={"text-white"} bgColor={"bg-white"}/>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
    </>
  )
}
