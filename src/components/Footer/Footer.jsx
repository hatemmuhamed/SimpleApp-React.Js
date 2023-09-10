import React from 'react'

export default function Footer() {
  return <>

    <footer className=' text-white'>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3>AROUND THE WEB</h3>
              <div className="icons-social ms-4">
                <i className="fa-brands icon mx-1 fa-facebook"></i>
                <i className="fa-brands icon mx-1 fa-twitter"></i>
                <i className="fa-brands icon mx-1 fa-linkedin-in"></i>
                <i className="fa-solid icon mx-1 fa-globe"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3>ABOUT FREELANCER</h3>
              <p className='ps-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer-last  text-center w-100">
      <p className='pt-2'>Copyright © Your Website 2021</p>
    </div>

  </>
}
