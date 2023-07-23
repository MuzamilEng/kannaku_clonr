import React from "react";
import Card from "./Card";
import CarSearchForm from "./CarSearchForm";

const data = [
  {title: "Hotel",icon: "home", bgcolor:"lightgrey", link:"/booking/hotels"},
  {title: "Flight",icon: "navigation", bgcolor:"lightgrey", link:"/booking/flights"},
  {title: "Car Hire",icon: "truck", bgcolor:"lightgrey", link:"/booking/cars"},
  {title: "Boat",icon: "home", bgcolor:"lightgrey", link:"/booking/boats"},
  {title: "Bus",icon: "truck", bgcolor:"lightgrey", link:"/booking/buses"},
  {title: "Keke",icon: "truck", bgcolor:"lightgrey", link:"/booking/kekes"},
  {title: "Train",icon: "truck", bgcolor:"lightgrey", link:"/booking/trains"},
  {title: "Bike",icon: "truck", bgcolor:"lightgrey", link:"/booking/bikes"},
  {title: "Delivery",icon: "truck", bgcolor:"lightgrey", link:"/booking/parcelfordelivery"}
  
];
const CarSearchArea = ({productType}) => {
 
  return (
    <div className="row">
      <div className="carSearchArea col-12">
        <div className="row p-1">
          {data.map((d, i) => {
            return (
              <div key={i} className="col">
                <Card title={d.title} icon={d.icon} bgcolor={d.link.includes(productType) ? "yellow": d.bgcolor} link={d.link}/>
              </div>
            )
          })}
          
        </div>
        <CarSearchForm/>
      </div>
    </div>
  );
}

export default CarSearchArea;
