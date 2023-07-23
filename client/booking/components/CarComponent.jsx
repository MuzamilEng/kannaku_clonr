import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import car from "../../assets/img/car.png";
import RatingComponent from './RatingComponent'

function CarComponent() {
  return (
    <div className="col-3">
        <Image layout='responsive' src={car} alt="" />
        <div className="row p-2 rounded" style={{backgroundColor:"#CC2D4A", color:"white", margin:"1px"}}>
            <h4 style={{color:"white"}}>Paul</h4> <span>23 riders</span>

            <p>53 miles away</p>
            <p>Rating: <RatingComponent rating={4.3}/></p>
            <Link href='/booking/cardetails'>
              <button className='btn' style={{backgroundColor:"#007BFF",color:"white"}}>Book</button>
            </Link>
        </div>
    </div>
  )
}

export default CarComponent