import React from "react";
import Card from "../components/Card";
import FlightSearchForm from "./FlightSearchForm";
import Image from 'next/image'

const data = [
  {title: "Hotel",icon: "home", bgcolor:"lightgrey", link:"/booking/hotels"},
  {title: "Flight",icon: "navigation", bgcolor:"lightgrey", link:"/booking/flights"},
  {title: "Car Hire",icon: "truck", bgcolor:"lightgrey", link:"/booking/cars"},
  {title: "Boat",icon: "home", bgcolor:"lightgrey", link:"/booking/boats"},
  {title: "Bus",icon: "truck", bgcolor:"lightgrey", link:"/booking/buses"},
  {title: "Keke",icon: "truck", bgcolor:"lightgrey", link:"/booking/kekes"},
  {title: "Train",icon: "truck", bgcolor:"lightgrey", link:"/booking/trains"},
  {title: "Bike",icon: "truck", bgcolor:"lightgrey", link:"/booking/bikes"},
  {title: "Delivery",icon: "truck", bgcolor:"lightgrey", link:"/booking/parceldelivery"}
  
];
const FlightSearchArea = ({productType, img}) => {
  
  return (
    <div className="row">
      <div className="flightSearchArea col-12">
        <div className="row p-2">
          {data.map((d, i) => {
            return (
              <div key={i} className="col">
                <Card title={d.title} icon={d.icon} bgcolor={d.link.includes(productType) ? "yellow": d.bgcolor} link={d.link}/>
              </div>
            )
          })}
        </div>
        <br />
        <div className="row" style={{marginBottom:"-30px"}}>
          <div className="col-2"><h6 className="text-center">Find Flights</h6></div>
          <div className="col-2"><h6 className="text-end">Choose Flight</h6></div>
          <div className="col-3"><h6 className="text-end">Passengers</h6></div>
          <div className="col-2"><h6 className="text-center">Itinerary</h6></div>
          <div className="col-3"><h6 className="text-center">Invoice</h6></div>
        </div>
        <div className="row p-2">
          <div className="col-12">
          <Image layout='responsive' src={img} alt="" />
          </div>
        </div>
        <FlightSearchForm/>
      </div>
    </div>
  );
}

export default FlightSearchArea;
