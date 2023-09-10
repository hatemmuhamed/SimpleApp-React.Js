import React from 'react'
import image from '../../Assets/Images/avataaars.svg'
export default function Home() {
  return <>
    <div className="home text-center text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='text-center'>
              <img src={image} alt="" />
            </div>
            <div className='pt-5 mb-3 d-flex align-items-center justify-content-center flex-column'>
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>START FRAMEWORK</h2>
              <div className='d-flex align-items-center justify-content-center'>
                <div className="line1"></div>
                <i className='fa-solid fa-star mx-3'></i>
                <div className="line1"></div>
              </div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </div>


  </>
}
