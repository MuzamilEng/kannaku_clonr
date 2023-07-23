import React, { useState } from 'react'
import Footer from './components/footer'
import Sidebar from "../layouts/EcommerceSidebar";
import Header from "../layouts/EcommerceHeader";
import Image from 'next/image';
import banner from '../assets/img/ecommerce/banner.png'
import PickUp_BSB from '../assets/img/ecommerce/PickUp_BSB.gif'
import Jumia_Prime from '../assets/img/ecommerce/Jumia-Prime-1YearSub_BSB.gif'
import samsung from '../assets/img/ecommerce/samsung.jpg'
import nokia from '../assets/img/ecommerce/nokia.jpg'
import nokia2 from '../assets/img/ecommerce/nokia2.jpg'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import TopHeader from './components/topHeader'
import ProductTwo from './components/productTwo'
import Link from 'next/link'

function Cart() {

    const products = [
        { image: samsung, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Samsung Galaxy" },
        { image: nokia, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Fngeen Luxury ..." },
        { image: samsung, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Computing" },
        { image: nokia2, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Flash Sales" },
        { image: nokia, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Flash Sales" },
        { image: samsung, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Flash Sales" },
        { image: nokia2, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Flash Sales" },
        { image: samsung, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Flash Sales" },
        { image: nokia, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Flash Sales" },
        { image: samsung, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "Flash Sales" },
        { image: nokia2, discountPrice: 210, actualPrice: 320, itemsLeft: 21, name: "18 pcs 3D .." },
    ]

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

    const [cartCount, setcartCount] = useState(0)

    const add = () => {
        setcartCount(cartCount++)
    }
    const sub = () => {
        setcartCount(cartCount--)
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">

                    <div className="row">
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col-9">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Cart(2)</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-2">
                                                    <Image className='rounded' src={banner} alt="" layout='responsive' />

                                                    <button className="text-yellow btn mt-3"><i className='fa fa-trash' />REMOVE</button>
                                                </div>
                                                <div className="col-7">
                                                    <h6>Mama{"'"}s Pride Premium parboiled Rice 6KG</h6>
                                                    <small>Seller:</small><span>CARENA</span> <small>| Variation:</small>
                                                    <span>...5KG</span>
                                                </div>
                                                <div className="col-3">
                                                    <h3 className='text-end'><b>$3454</b></h3>
                                                    <div className="row">
                                                        <p className="text-end">
                                                            <span><del>$5000</del></span>
                                                            <span className='text-yellow p-2' style={{ backgroundColor: "lightyellow" }}>-31%</span>
                                                        </p>
                                                    </div>
                                                    <button className="text-white bg-yellow btn mt-3 ms-5" onClick={sub}><i className='fa fa-minus' /></button>
                                                    <span className='p-2 mt-2 fs-5'>{cartCount}</span>
                                                    <button className="text-white bg-yellow btn mt-3" onClick={add}><i className='fa fa-plus' /></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>CART SUMMARY</h5>
                                        </div>
                                        <div className="card-body">
                                            <span><b>Subtotal</b></span> <span className="text-end">$3454</span>
                                            <p>Delivery fees not included yet.</p>
                                            <hr />
                                            <div className="row">
                                                <Link href='/ecommerce/checkout'>
                                                    <a>
                                                        <button className="btn btn-warning text-white">Checkout($3454)</button>

                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ms-3 me-2" >

                    <div className="col-12">

                        {/* Recently Viewed  */}
                        <div className="row bg-white p-2 text-dark rounded">
                            <div className="col-md-6 col-sm-12  mt-2">
                                <h5><b>Recently Viewed</b></h5>
                            </div>
                            <div className="col-md-6 mt-2">
                                <h6 className="text-end">SEE ALL {">"}</h6>
                            </div>
                        </div>
                        <div className="row bg-white" style={{}}>
                            <Carousel responsive={responsive}>

                                {products.map((product, index) => {
                                    return (
                                        <div key={index}>
                                            <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        {/* Recently Viewed  */}

                        {/* Top Selling Items  */}
                        <div className="row mt-3 p-2 text-dark bg-white rounded">
                            <div className="col-md-6 col-sm-12  mt-2">
                                <h5><b>Top Selling Items</b></h5>
                            </div>
                        </div>
                        <div className="row bg-white" style={{}}>
                            <Carousel responsive={responsive}>

                                {products.map((product, index) => {
                                    return (
                                        <div key={index}>
                                            <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        {/* Top Selling Items  */}


                        {/* You May Also Like  */}
                        <div className="row mt-3 p-2 text-dark bg-white rounded">
                            <div className="col-md-6 col-sm-12  mt-2">
                                <h5><b>You May Also Like</b></h5>
                            </div>
                            <div className="col-md-6 mt-2">
                                <h6 className="text-end">SEE ALL {">"}</h6>
                            </div>
                        </div>
                        <div className="row bg-white" style={{}}>
                            <Carousel responsive={responsive}>

                                {products.map((product, index) => {
                                    return (
                                        <div key={index}>
                                            <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        {/* You May Also Like  */}

                        {/* Customers who viewed this also viewed  */}
                        <div className="row mt-3 p-2 text-dark bg-white rounded">
                            <div className="col-md-6 col-sm-12  mt-2">
                                <h5><b>Customers who viewed this also viewed</b></h5>
                            </div>
                            <div className="col-md-6 mt-2">
                                <h6 className="text-end">SEE ALL {">"}</h6>
                            </div>
                        </div>
                        <div className="row bg-white" style={{}}>
                            <Carousel responsive={responsive}>

                                {products.map((product, index) => {
                                    return (
                                        <div key={index}>
                                            <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        {/* Customers who viewed this also viewed  */}

                    </div>

                </div>
                <Footer />
            </div>



        </>
    )
}

export default Cart