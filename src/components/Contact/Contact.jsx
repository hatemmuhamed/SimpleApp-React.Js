import React from 'react'

export default function Contact() {
  return <>

    <div className="contact mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>CONATCT SECTION</h2>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className="line2"></div>
                <i className='fa-solid fa-star mx-3'></i>
                <div className="line2"></div>
              </div>
            </div>
            <div className="form w-50 mx-auto mt-5 p-3">
              {/* <label className='position-relative top-0 _top' htmlFor="userName">user Name :</label> */}
              <input type="text" placeholder='userName' name='userName' className='form-control mb-5 border-0 border-bottom py-3 
              position-relative ' />
              <input type="number" placeholder='userAge' name='userName' className='form-control mb-5 border-0 border-bottom py-3 
              position-relative ' />
              <input type="text" placeholder='userEmail' name='userName' className='form-control mb-5 border-0 border-bottom py-3 
              position-relative ' />
              <input type="password" placeholder='userPassword' name='userName' className='form-control mb-4 border-0 border-bottom py-3 
              position-relative ' />
              <button className='btn text-white'>send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
}
