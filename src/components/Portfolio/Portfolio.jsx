import React from 'react'
import poert1 from '../../Assets/Images/poert1.png'
import poert2 from '../../Assets/Images/port2.png'
import poert3 from '../../Assets/Images/port3.png'
export default function Portfolio() {
  return <>

    <div className="portfolio ">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-12">
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
              <div className='d-flex align-items-center justify-content-center'>
                <div className="line2"></div>
                <i className='fa-solid fa-star mx-3'></i>
                <div className="line2"></div>
              </div>
            </div>

          </div>
          <div className="col-md-4  text-center">
            <div className='position-relative'>
              <img className='w-100 rounded-3 ' src={poert1} alt="..." />
              <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal1" className='position-absolute layer text-center d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-plus fa-6x text-white'></i>
              </figcaption>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className='position-relative'>
              <img className='w-100 rounded-3' src={poert2} alt="..." />
              <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal2" className='position-absolute layer text-center d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-plus fa-6x text-white'></i>
              </figcaption>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className='position-relative'>
              <img className='w-100 rounded-3' src={poert3} alt="..." />
              <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal3" className='position-absolute layer text-center d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-plus fa-6x text-white'></i>
              </figcaption>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className='position-relative'>
              <img className='w-100 rounded-3' src={poert1} alt="..." />
              <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal1" className='position-absolute layer text-center d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-plus fa-6x text-white'></i>
              </figcaption>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className='position-relative'>
              <img className='w-100 rounded-3' src={poert2} alt="..." />
              <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal2" className='position-absolute layer text-center d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-plus fa-6x text-white'></i>
              </figcaption>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className='position-relative'>
              <img className='w-100 rounded-3' src={poert3} alt="..." />
              <figcaption data-bs-toggle="modal" data-bs-target="#exampleModal3" className='position-absolute layer text-center d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-plus fa-6x text-white'></i>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* ===================== Modal ======================= */}
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      
      <div class="modal-body d-flex align-items-center justify-content-center p-0">
        <img src={poert1} alt="" />
      </div>
      
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      
      <div class="modal-body d-flex align-items-center justify-content-center p-0">
        <img src={poert2} alt="" />
      </div>
      
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      
      <div class="modal-body d-flex align-items-center justify-content-center p-0">
        <img src={poert3} alt="" />
      </div>
      
    </div>
  </div>
</div>


  </>
}
