import React from "react";
import Link from "next/link";
import deliverysteps from "../../assets/img/deliverysteps.png"
import Image from 'next/image'

function FoodCategories() {
    const data = [
        {
            name: "All",
            img: "/assets/img/delivery/cake.png",
            bgcolor: "#F2F2F2",
            link: "/booking/foodfordelivery",
        },
        {
            name: "Salad",
            img: "/assets/img/delivery/cupcake.png",
            bgcolor: "#F2F2F2",
            link: "/booking/foodfordelivery",
        },
        {
            name: "Protein",
            img: "/assets/img/delivery/diet.png",
            bgcolor: "#F2F2F2",
            link: "/booking/foodfordelivery",
        },
        {
            name: "Soap",
            img: "/assets/img/delivery/hot.png",
            bgcolor: "#F2F2F2",
            link: "/booking/foodfordelivery",
        },
        {
            name: "Cereals",
            img: "/assets/img/delivery/ramen.png",
            bgcolor: "#F2F2F2",
            link: "/booking/foodfordelivery",
        },
        {
            name: "Sides",
            img: "/assets/img/delivery/burger.png",
            bgcolor: "#F2F2F2",
            link: "/bookingfoodfordelivery",
        },
    ];
    return (
        <div className="row mb-2">
            {data.map((d, i) => {
                return (
                    <div key={i}  className="col-2">
                        <Link href={d.link}>
                            <div className="row p-2 border rounded me-2" style={{ backgroundColor: d.bgcolor }}>
                                <p className="text-center">
                                    <Image layout="responsive" width={500} height={500}
                                        src={d.img}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </p>
                                <h5 className="text-center">{d.name}</h5>
                            </div>
                        </Link>

                    </div>

                );
            })}
        </div>
    );
}

export default FoodCategories;
