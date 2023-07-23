import React from 'react'

function Flight() {
  return (
    <div className="row mb-2">
        <div className="col-10">
          <div className="row">
            <div className="col-2">
            <span>Cheapest</span>
            </div>
            <div className="col-2">
            <span>Rating</span> <span style={{color:"yellow"}}>4.5</span>
            </div>
          </div>
            
            
            <hr />
            <div className="row">
              <div className="col-1">
                <span className='user-img'>
                  <img src="/src/assets/img/img-01.jpg"  alt="" />
                </span>
              </div>
              <div className="col-2">
              <span className="ms-2"><b>Emirates</b></span>
              </div>
              <div className="col-1">
              <b>12:10</b>
                <h6>GAU</h6>
              </div>
              <div className="col-2">
                <span>through</span>
                <h6>HKG</h6>
              </div>
              <div className="col-1">
              <b>12:10</b>
              <h6>DAC</h6>
              </div>
              <div className="col-3">
                <b>65h 12min</b>
              </div>
              <div className="col-2">
                <button className="btn rounded bg-white text-dark">view details</button>
              </div>

            </div>
        </div>

        <div className="col-2">
          <div className="row p-1" style={{backgroundColor:"lightgray"}}>
            <h5 style={{color:"red"}}>25% off</h5>
            <h2>$356</h2>
            <button className="btn rounded text-white" style={{backgroundColor:"blue"}}>Book</button>
          </div>
        </div>
    </div>
  )
}

export default Flight