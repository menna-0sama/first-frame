import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="upper-footer bg-blue py-5 text-white text-center">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h3>AROUND THE WEB</h3>
                <ul className='list-unstyled d-flex justify-content-center gap-3'>
                    <li><i className='fa-brands fa-facebook'></i></li>
                    <li><i className='fa-brands fa-facebook'></i></li>
                    <li><i className='fa-brands fa-facebook'></i></li>
                    <li><i className='fa-brands fa-facebook'></i></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    </div>
    <div className="lower-footer bg-dark-blue text-center py-3 text-white">
        Copyright © Your Website 2021
    </div>
    </>
  )
}
