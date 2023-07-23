import React from 'react'
import Link from 'next/link'

function CheckoutHeader() {
  return (
    <div className=' row bg-white text-dark p-2 shadow'>
        <div className="col-1"></div>
        <div className="col-3">
            <Link href='/ecommerce'>
            <a><h1>Logo</h1></a>
            </Link>
        </div>
        <div className="col-3">
            <i className='fa fa-phone'/>
            <small className='text-gray'>Need Help? <br /> Please fill the Contact Us form</small>
        </div>
        <div className="col-2">
        <i className="fa fa-lock" aria-hidden="true"></i>
            <small className='text-gray'>Secure <br /> Payment</small>
        </div>
        <div className="col-2">
            <i className='fa fa-undo'/>
            <small className='text-gray'>Easy returns</small>
        </div>
        <div className="col-1"></div>
    </div>
  )
}

export default CheckoutHeader