import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DeliveryCard from "./DeliveryCard";

function Category({categoryType}) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const data = [
        {title: "PARCEL",icon: "home", bgcolor:"#F7F8FA", link:"/booking/parcelfordelivery"},
        {title: "FOOD",icon: "navigation", bgcolor:"#F7F8FA", link:"/booking/foodfordelivery"},
        {title: "COSMETICS",icon: "truck", bgcolor:"#F7F8FA", link:"/booking/cosmeticsfordelivery"},
        {title: "GROCERIES",icon: "home", bgcolor:"#F7F8FA", link:"/booking/grocierisfordelivery"},
        {title: "Health Care",icon: "truck", bgcolor:"#F7F8FA", link:"/booking/helthcarefordelivery"},
        {title: "Pet Supplies",icon: "truck", bgcolor:"#F7F8FA", link:"/booking/petsuppliesfordelivery"},
        {title: "Physiotherapy",icon: "truck", bgcolor:"#F7F8FA", link:"/booking/phytheraphyfordelivery"},
        {title: "PARCEL",icon: "truck", bgcolor:"#F7F8FA", link:"/booking/parcelfordelivery"},
        
      ];
    return (
        <Carousel responsive={responsive}>
            
            {data.map((d, i) => {
            return (
                <div>
                    <DeliveryCard title={d.title} icon={d.icon} bgcolor={d.link.includes(categoryType) ? "red": d.bgcolor} link={d.link} />
                </div>
            )
          })}
        </Carousel>
       
    );
}

export default Category;
