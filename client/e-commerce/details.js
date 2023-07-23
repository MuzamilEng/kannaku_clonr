import React, { useState } from "react";
import Footer from "./components/footer";
import Image from "next/image";
import samsung from "../assets/img/ecommerce/samsung.jpg";
import nokia from "../assets/img/ecommerce/nokia.jpg";
import nokia2 from "../assets/img/ecommerce/nokia2.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductTwo from "./components/productTwo";
import RatingComponent from "./components/RatingComponent";
import { ProgressBar } from "react-bootstrap";
import Link from 'next/link';


function Details() {
  const products = [
    {
      image: samsung,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Samsung Galaxy",
    },
    {
      image: nokia,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Fngeen Luxury ...",
    },
    {
      image: samsung,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Computing",
    },
    {
      image: nokia2,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Flash Sales",
    },
    {
      image: nokia,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Flash Sales",
    },
    {
      image: samsung,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Flash Sales",
    },
    {
      image: nokia2,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Flash Sales",
    },
    {
      image: samsung,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Flash Sales",
    },
    {
      image: nokia,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Flash Sales",
    },
    {
      image: samsung,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "Flash Sales",
    },
    {
      image: nokia2,
      discountPrice: 210,
      actualPrice: 320,
      itemsLeft: 21,
      name: "18 pcs 3D ..",
    },
  ];

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
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="row">
                <div className="col-9">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-4">
                          <Image
                            className="rounded"
                            src={nokia}
                            alt=""
                            layout="responsive"
                          />
                          <hr />

                          <p>SHARE THIS PRODUCT</p>

                          <a href="" className="text-dark me-4">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="" className="text-dark me-4">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>

                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <span className="text-white bg-blue p-1 rounded">
                                Official Store
                              </span>
                            </div>
                            <div className="col">
                              <div className="row">
                                <span className="text-end">
                                  <i className="fa fa-heart text-yellow" />
                                </span>
                              </div>
                            </div>
                          </div>


                          <p className="fs-4">
                            Nokia C30, {"6.8\""}  IPS LCD Screen, 2GB/32GB Memory, 13MP Dual Camera, 6000 mAh Battery, Android 11 - White
                          </p>

                          <p>Brand: <a href="#">Nokia | similar products from nokia</a></p>
                          <RatingComponent rating={4} /><span>(2 verified ratings)</span>

                          <div className="row pb-2" style={{ border: "1px solid red" }}>
                            <div className="col-12 bg-red text-white p-2">
                              <div className="row">
                                <div className="col-4">
                                  <span>Flash Sales</span>

                                </div>
                                <div className="col-8">
                                  <div className="row">
                                    <span className="text-end">Time Left: 15h:32m:12s</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3>$56,324</h3>
                            <span className="text-gray"><del>$63,234</del></span>
                            <div className="col-3">
                              <span>30 items left</span>

                            </div>
                            <div className="col mt-2">
                              <ProgressBar style={{ height: "6px" }}
                                variant="warning"
                                now={20}
                              />
                            </div>
                          </div>

                          <p>+ shipping from ₦ 180 to LEKKI-AJAH (SANGOTEDO)</p>
                          <div className="row">
                            <Link href='/ecommerce/cart'>
                              <a>
                                <div className="row">

                                  <button className="btn btn-warning text-white"> <i className="fa fa-shopping-cart" />ADD TO CART</button>
                                </div>
                              </a>
                            </Link>
                          </div>
                          <hr />

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card">
                    <div className="card-header">
                      <h6>DELIVERY AND RETURNS</h6>
                    </div>
                    <div className="card-body">
                      <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja </p>
                      <hr />
                      <b>Choose your location</b>
                      <form action="">
                        <select name="" id="" className="form-control mb-2">
                          <option value="">Lagos</option>
                          <option value="">Kwara</option>
                          <option value="">Kogi</option>
                          <option value="">Kebbi</option>
                        </select>

                        <select name="" id="" className="form-control">
                          <option value=""> LEKKI-AJAH(SANGOTEDO)</option>
                          <option value=""> LEKKI-AJAH(JAKANDE)</option>
                          <option value=""> LEKKI-AJAH(ILASAN)</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-9">
                  <div className="card">
                    <div className="card-header" id="details"><h6>Product details</h6></div>
                    <div className="card-body">
                      <p>Nokia C30 Summary</p>
                      <p>Nokia C30 mobile was launched on 27th July 2021. The phone comes with a 6.8-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20.5:9. Nokia C30 is powered by a 1.2GHz octa-core processor. It comes with 2GB of RAM. The Nokia C30 runs Android 11 and is powered by a 6000mAh battery.</p>
                      <p>As far as the cameras are concerned, the Nokia C30 on the rear packs a dual camera setup featuring a 13-megapixel primary camera, and a 2-megapixel camera. The rear camera setup has autofocus. It has a single front camera setup for selfies, featuring a 5-megapixel sensor.</p>

                    </div>
                  </div>
                </div>
                <div className="col-3 fixed-content">
                  <a href="#details">
                    <div className="row p-2  border text-gray">
                      <b>Product Details</b>
                    </div>
                  </a>
                  <a href="#specifications">
                    <div className="row p-2 border text-gray">
                      <b>Product specifications</b>
                    </div>
                  </a>
                  <a href="#feedback">
                    <div className="row p-2 border text-gray">
                      <b>Verified Customer Feedback</b>
                    </div>
                  </a>

                  <div className="row bg-white">
                    <div className="col-4">
                      <Image src={nokia} alt="" />
                    </div>
                    <div className="col-8">
                      <p>Nokia C30</p>
                      <b>$56,787</b> <br />
                      <span><del>$62,424</del></span>

                    </div>
                    <Link href='/ecommerce/cart'>
                      <a>
                        <div className="row">

                          <button className="btn btn-warning text-white"> <i className="fa fa-shopping-cart" />ADD TO CART</button>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-9">
                  <div className="card">
                    <div className="card-header" id="specifications"><h6>Specifications</h6></div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="card">
                            <div className="card-header">
                              KEY FEATURES
                            </div>
                            <div className="card-body">
                              <ul>
                                <li>Display - 6.8-inch (1080x2400)</li>
                                <li>Processor - 1.2GHz octa-core</li>
                                <li>Front Camera - 5MP</li>
                                <li>Rear Camera - 13MP + 2MP</li>
                                <li>RAM - 2GB</li>
                                <li>Storage - 32GB</li>
                                <li>Battery Capacity - 6000mAh</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card">
                            <div className="card-header">
                              SPECIFICATIONS
                            </div>
                            <div className="card-body">
                              <ul>
                                <li>SKU: NO891MP0ZV1X9NAFAMZ</li>
                                <li>Model: TA-1359</li>
                                <li>Weight (kg): 1</li>
                                <li>Color: White</li>
                                <li>Shop Type: Jumia Mall</li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  {/* Customers who viewed this also viewed  */}
                  <div className="row p-2 text-dark bg-white rounded">
                    <div className="col-md-6 col-sm-12  mt-2">
                      <h5>
                        <b>Customers who viewed this also viewed</b>
                      </h5>
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
                            <ProductTwo
                              name={product.name}
                              image={product.image}
                              actualPrice={product.actualPrice}
                              discountPrice={product.discountPrice}
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                  {/* Customers who viewed this also viewed  */}
                </div>

                <div className="col-12">
                  {/* You May Also Like  */}
                  <div className="row mt-3 p-2 text-dark bg-white rounded">
                    <div className="col-md-6 col-sm-12  mt-2">
                      <h5>
                        <b>You May Also Like</b>
                      </h5>
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
                            <ProductTwo
                              name={product.name}
                              image={product.image}
                              actualPrice={product.actualPrice}
                              discountPrice={product.discountPrice}
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                  {/* You May Also Like  */}

                  <div className="row mt-5 " id="feedback">
                    <div className="card">
                      <div className="card-header">
                        Verified Customer Feedback
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-2">
                            <p>VERIFIED RATINGS</p>
                          </div>
                          <div className="col-10">
                            <p>COMMENTS FROM VERIFIED PURCHASES(1)</p>
                            <RatingComponent rating={4} />
                            <b>It is ok</b>
                            <p>The phone is okay. It has a big screen, it is fast/does not lag, I dont like the colour I ordered though, I should have ordered black. The battery says 6000mah, but it kinda performs like a 5000mah. Its a very good phone sha.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">

            {/* Sponsored products  */}
            <div className="row mt-3 p-2 text-dark bg-white rounded">
              <div className="col-md-6 col-sm-12  mt-2">
                <h5>
                  <b>Sponsored products</b>
                </h5>
              </div>
            </div>
            <div className="row bg-white" style={{}}>
              <Carousel responsive={responsive}>
                {products.map((product, index) => {
                  return (
                    <div key={index}>
                      <ProductTwo
                        name={product.name}
                        image={product.image}
                        actualPrice={product.actualPrice}
                        discountPrice={product.discountPrice}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            {/* Sponsored products  */}

            {/* Recently Viewed  */}
            <div className="row bg-white mt-3 p-2 text-dark rounded">
              <div className="col-md-6 col-sm-12  mt-2">
                <h5>
                  <b>Recently Viewed</b>
                </h5>
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
                      <ProductTwo
                        name={product.name}
                        image={product.image}
                        actualPrice={product.actualPrice}
                        discountPrice={product.discountPrice}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            {/* Recently Viewed  */}


          </div>
        </div>
        <Footer />

      </div>


    </>
  );
}

export default Details;
