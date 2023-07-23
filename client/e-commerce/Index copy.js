import React from 'react'
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
import flashsales from '../assets/img/ecommerce/flash-sales.png'
import phonetablets from '../assets/img/ecommerce/phones-tablets.png'
import computing from '../assets/img/ecommerce/computing.png'
import Carousel from 'react-multi-carousel';

import "react-multi-carousel/lib/styles.css";
import Category from './components/category'
import TopHeader from './components/indexTopHeader'
import Product from './components/product'
import ProductTwo from './components/productTwo'

function Index() {

    const categories = [
        {image: flashsales, name: "Flash Sales"},
        {image: phonetablets, name: "Phone and Tablet"},
        {image: computing, name: "Computing"},
        {image: phonetablets, name: "Flash Sales"},
        {image: phonetablets, name: "Flash Sales"},
        {image: nokia, name: "Flash Sales"},
        {image: phonetablets, name: "Accesories"},
        {image: flashsales, name: "Flash Sales"},
        {image: phonetablets, name: "Flash Sales"},
        {image: phonetablets, name: "Flash Sales"},
        {image: samsung, name: "Groceries"},
    ]

    const products = [
        {image: samsung, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Samsung Galaxy"},
        {image: nokia, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Fngeen Luxury ..."},
        {image: samsung, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Computing"},
        {image: nokia2, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Flash Sales"},
        {image: nokia, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Flash Sales"},
        {image: samsung, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Flash Sales"},
        {image: nokia2, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Flash Sales"},
        {image: samsung, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Flash Sales"},
        {image: nokia, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Flash Sales"},
        {image: samsung, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "Flash Sales"},
        {image: nokia2, discountPrice: 210, actualPrice:320, itemsLeft:21, name: "18 pcs 3D .."},
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
    return (
        <>
            <div className="main-wrapper">
                <TopHeader/>
                <Header />
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        
                        <div className="row">
                            <div className="col-12 ecommerce-body">
                                <div className="row">
                                    <div className="col-8">
                                        <Image className='rounded' src={banner} alt="" height="415px" layout='responsive'/>
                                    </div>
                                    <div className="col-3">
                                            <Image className='rounded' src={PickUp_BSB} alt="" height="180px" layout='responsive'/>
                                            <Image className='rounded mt-3' src={Jumia_Prime} alt="" height="180px" layout='responsive'/>
                                        <div className="row">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="row" style={{marginLeft:"80px", marginRight:"80px", marginTop:"10px", marginBottom:"100px"}}>
                
                <div className="col-12">
                    <div className="row bg-white">
                        <Carousel responsive={responsive}>
                            
                            {categories.map((category, index) => {
                                return (
                                    <div  key={index}>
                                    <Category name={category.name} image={category.image}/>
                                </div>
                                )
                            })}
                        </Carousel>
                    </div>

                    {/* flash sales  */}
                    <div className="row bg-red mt-3 p-2 text-white rounded">
                        <div className="col-4 mt-2">
                            <h5><b>Flash Sales | Free Delivery</b></h5>
                        </div>
                        <div className="col-4">
                            <p className="text-center mt-2"><h5>Time Left: <b>14h:23m : 01s</b></h5></p>
                        </div>
                        <div className="col-4">
                            <p className="text-end mt-2">
                                <h6>SEE ALL {">"}</h6>
                            </p>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>
                    <Carousel responsive={responsive}>
                            
                            {products.map((product, index) => {
                                return (
                                    <div  key={index}>
                                    <Product name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} itemsLeft={product.itemsLeft}/>
                                </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    {/* flash sales  */}

                    {/* Top Selling Items  */}
                    <div className="row bg-white mt-3 p-2 text-dark rounded">
                        <div className="col-6 mt-2">
                            <h5><b>Top Selling Items</b></h5>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>
                    <Carousel responsive={responsive}>
                            
                            {products.map((product, index) => {
                                return (
                                    <div  key={index}>
                                    <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    {/* Top Selling Items  */}

                    {/* Top Deals | Free Delivery  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#B5DE93"}}>
                        <div className="col-md-6 col-sm-12  mt-2">
                            <h5><b>Top Deals | Free Delivery</b></h5>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>
                    <Carousel responsive={responsive}>
                            
                            {products.map((product, index) => {
                                return (
                                    <div  key={index}>
                                    <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    {/* Top Deals | Free Delivery  */}

                    
                    {/* Shop From Our Collections  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#B5DE93"}}>
                        <div className="col-12 mt-2">
                            <h5 className='text-center'><b>Shop From Our Collections</b></h5>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>

                            {products.map((product, index) => {
                                return (
                                    <div className='col-md-2 col-sm-6' key={index}>
                                    <Category name={product.name} image={product.image}/>
                                </div>
                                )
                            })}
                    
                    </div>
                    {/* Shop From Our Collections  */}

                    {/* PayDay Deals  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E1BEE7"}}>
                        <div className="col-12  mt-2">
                            <h5 className='text-center'><b>PayDay Deals</b></h5>
                        </div>
                       
                    </div>
                    <div className="row bg-white" style={{}}>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                    </div>
                    {/* PayDay Deals  */}

                    {/* Top Categories | Payday Deals  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E1BEE7"}}>
                        <div className="col-12 mt-2">
                            <h5 className='text-center'><b>Top Categories | Payday Deals</b></h5>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>

                            {categories.map((category, index) => {
                                return (
                                    <div className='col-md-2 col-sm-6' key={index}>
                                    <Category name={category.name} image={category.image}/>
                                </div>
                                )
                            })}
                    
                    </div>
                    {/* Top Categories | Payday Deals  */}

                    {/* Official Stores  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#B5DE93"}}>
                        <div className="col-12  mt-2">
                            <h5 className='text-center'><b>Official Stores</b></h5>
                        </div>
                       
                    </div>
                    <div className="row bg-white" style={{}}>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                    </div>
                    {/* Official Stores  */}

                    {/* Official Store Brands  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#B5DE93"}}>
                        <div className="col-12  mt-2">
                            <h5 className='text-center'><b>Official Store Brands</b></h5>
                        </div>
                       
                    </div>
                    <div className="row bg-white" style={{}}>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-2 col-sm-6 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                    </div>
                    {/* Official Store Brands  */}

                    {/* Xiaomi Official Store  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#B5DE93"}}>
                        <div className="col-md-6 col-sm-12  mt-2">
                            <h5><b>Xiaomi Official Store</b></h5>
                        </div>
                        <div className="col-md-6 mt-2">
                            <h6 className="text-end">SEE ALL {">"}</h6>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>
                    <Carousel responsive={responsive}>
                            
                            {products.map((product, index) => {
                                return (
                                    <div  key={index}>
                                    <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    {/* Xiaomi Official Store  */}

                    {/* Grocery Super Saver  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E2F5FF"}}>
                        <div className="col-12  mt-2">
                            <h5 className='text-center'><b>Grocery Super Saver</b></h5>
                        </div>
                       
                    </div>
                    <div className="row bg-white" style={{}}>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                    </div>
                    {/* Grocery Super Saver  */}

                    
                    {/* Top Categories | Grocery Super Saver  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E2F5FF"}}>
                        <div className="col-12 mt-2">
                            <h5 className='text-center'><b>Top Categories | Grocery Super Saver</b></h5>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>

                            {categories.map((category, index) => {
                                return (
                                    <div className='col-md-2 col-sm-6' key={index}>
                                    <Category name={category.name} image={category.image}/>
                                </div>
                                )
                            })}
                    
                    </div>
                    {/* Top Categories | Grocery Super Saver  */}

                    {/* Top Deals | Grocery Super Saver  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E2F5FF"}}>
                        <div className="col-md-6 col-sm-12  mt-2">
                            <h5><b>Top Deals | Grocery Super Saver</b></h5>
                        </div>
                        <div className="col-md-6 mt-2">
                            <h6 className="text-end">SEE ALL {">"}</h6>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>
                    <Carousel responsive={responsive}>
                            
                            {products.map((product, index) => {
                                return (
                                    <div  key={index}>
                                    <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    {/* Top Deals | Grocery Super Saver  */}


                    {/* Refurbished iPhones  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E2F5FF"}}>
                        <div className="col-12  mt-2">
                            <h5 className='text-center'><b>Refurbished iPhones</b></h5>
                        </div>
                       
                    </div>
                    <div className="row bg-white" style={{}}>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                        <div className="col-md-6 col-sm-12 store">
                            <Image className='rounded' src={banner} alt="" layout='responsive'/>
                        </div>
                    </div>
                    {/* Refurbished iPhones  */}

                    
                    {/* Top Categories | Refurbished iPhones  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E2F5FF"}}>
                        <div className="col-12 mt-2">
                            <h5 className='text-center'><b>Top Categories | Refurbished iPhones</b></h5>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>

                            {categories.map((category, index) => {
                                return (
                                    <div className='col-md-2 col-sm-6' key={index}>
                                    <Category name={category.name} image={category.image}/>
                                </div>
                                )
                            })}
                    
                    </div>
                    {/* Top Categories | Refurbished iPhones  */}

                    {/* Top Deals | Refurbished iPhones  */}
                    <div className="row mt-3 p-2 text-dark rounded" style={{backgroundColor:"#E2F5FF"}}>
                        <div className="col-md-6 col-sm-12  mt-2">
                            <h5><b>Top Deals | Refurbished iPhones</b></h5>
                        </div>
                        <div className="col-md-6 mt-2">
                            <h6 className="text-end">SEE ALL {">"}</h6>
                        </div>
                    </div>
                    <div className="row bg-white" style={{}}>
                    <Carousel responsive={responsive}>
                            
                            {products.map((product, index) => {
                                return (
                                    <div  key={index}>
                                    <ProductTwo name={product.name} image={product.image} actualPrice={product.actualPrice} discountPrice={product.discountPrice} />
                                </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    {/* Top Deals | Refurbished iPhones  */}


                </div>

            </div>
            <Footer />
        </>
    )
}

export default Index