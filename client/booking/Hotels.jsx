import React from "react";
import BannerOne from "./components/BannerOne";
import SearchArea from "./components/SearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import CuratedHotels from "./components/CuratedHotels";
import WhyUs from "./components/WhyUs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'
import hotel from "../assets/img/doctors/images@1x.png";
import img01 from "../assets/img/img-01.jpg";


function Hotels() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
    return (
        <div className="main-wrapper">
            <Header />


            <Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <BannerOne bookingtype="Hotel" />
                    <SearchArea productType="hotel" />
                    <div className="row">
                        <div className="col-12 booking-body">



                            <div className="row mt-5 ps-5">
                                <span style={{ color: "blue" }} className="fs-4 fw-bold">
                                    Featured offers
                                </span><br />
                                <span>get best offers and discounts</span>
                            </div>

                            <div className="row ps-5 pe-2 rounded">
                                <div className="col-6 p-2 overflow-hidden">

                                    <Image layout="responsive" src={hotel} alt="" />

                                </div>
                                <div className="col-6 p-2 overflow-hidden">

                                    <Image layout="responsive" src={hotel} alt="" />

                                </div>
                            </div>

                            <div className="row ps-5 pe-2 mt-5">
                                <span style={{ color: "blue" }} className="fs-4 fw-bold">
                                    Popular Destinations
                                </span><br />
                                <span>Explore these places and some other thing here</span>
                            </div>

                            <div className="row ps-5 pe-2">
                                <Carousel responsive={responsive}>
                                    <div>
                                        <Image layout="responsive" className="img-fluid pe-2 pt-2 pb-2" src={img01} alt="" />
                                    </div>
                                    <div>
                                        <Image layout="responsive" className="img-fluid p-2" src={img01} alt="" />
                                    </div>
                                    <div>
                                        <Image layout="responsive" className="img-fluid p-2" src={img01} alt="" />
                                    </div>
                                    <div>
                                        <Image layout="responsive" className="img-fluid p-2" src={img01} alt="" />
                                    </div>
                                </Carousel>
                            </div>

                            <div className="row ps-5 pe-2 mt-5">
                                <span style={{ color: "blue" }} className="fs-4 fw-bold">
                                    Curated Hotels for you
                                </span><br />
                                <span>get best offers and discounts</span>
                            </div>

                            <div className="row ms-4 me-2">

                                <div className="col-4">
                                    <CuratedHotels />
                                </div>
                                <div className="col-4">
                                    <CuratedHotels />
                                </div>
                                <div className="col-4">
                                    <CuratedHotels />
                                </div>
                            </div>

                            <div className="row ps-5 pe-2 mt-5">
                                <span style={{ color: "blue" }} className="fs-4 fw-bold">
                                    Why Choose Us
                                </span><br />
                                <span>Book Hotels Online. Save Time and Money!</span>
                            </div>

                            <div className="row ms-4 me-2">
                                <div className="col-4">
                                    <WhyUs />
                                </div>
                            </div>

                            <BookingFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotels;
