import React, { useState } from "react";
import Footer from "./components/footer";
import Image from "next/image";
import banner from "../assets/img/ecommerce/banner.png";
import samsung from "../assets/img/ecommerce/samsung.jpg";
import nokia from "../assets/img/ecommerce/nokia.jpg";
import nokia2 from "../assets/img/ecommerce/nokia2.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopHeader from "./components/indexTopHeader";
import Link from "next/link";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import ProductTwo from "./components/ProductTwo";
import CheckBoxForCategory from "./components/CheckBoxForCategory";
import FeatherIcon from "feather-icons-react";
import RangeSlider from "react-bootstrap-range-slider";

function Listings() {
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
  const [value, setValue] = useState(0);
  const brands = [
    {
      label: "A4 Fashion",
    },
    {
      label: "Afnan",
    },
    {
      label: "Aichun Beauty",
    },
    {
      label: "Aichun Beauty",
    },
  ];

  const passengers = [
    {
      label: "1-2 passengers",
      count: 85,
    },
    {
      label: "1-2 passengers",
      count: 85,
    },
    {
      label: "1-2 passengers",
      count: 85,
    },
  ];

  const bags = [
    {
      label: "1-2 bags",
      count: 85,
    },
    {
      label: "1-2 bags",
      count: 85,
    },
    {
      label: "1-2 bags",
      count: 85,
    },
  ];
  const transmission = [
    {
      label: "Automatic",
      count: 85,
    },
    {
      label: "Manual",
      count: 85,
    },
  ];
  const userreview = [
    {
      label: "Excellent",
    },
    {
      label: "Good",
    },
    {
      label: "Fair",
    },
    {
      label: "Bad",
    },
  ];
  const productType = [
    {
      label: "Body Shop",
    },
    {
      label: "Dark & Lovely Hair Color",
    },
    {
      label: "Dark & Lovely Relaxers",
    },
    {
      label: "Dark & Lovely Children Products",
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Product or Category  */}
          <div
            className="row mt-1 p-2 text-dark rounded"
            style={{ backgroundColor: "#B5DE93" }}
          >
            <div className="col-12  mt-2">
              <h5 className="text-center">
                <b>Product or Category</b>
              </h5>
            </div>
          </div>
          <div className="row bg-white" style={{}}>
            <div className="col-md-6 col-sm-12 store">
              <Image
                className="rounded"
                src={banner}
                alt=""
                layout="responsive"
              />
            </div>
            <div className="col-md-6 col-sm-12 store">
              <Image
                className="rounded"
                src={banner}
                alt=""
                layout="responsive"
              />
            </div>
          </div>
          {/* Product or Category  */}

          {/* Top Deals(Category Name)  */}
          <div
            className="row mt-3 p-2 text-dark rounded"
            style={{ backgroundColor: "#B5DE93" }}
          >
            <div className="col-md-6 col-sm-12  mt-2">
              <h5>
                <b>Top Deals(Category Name)</b>
              </h5>
            </div>
            <div className="col-md-6 mt-2">
              <h6 className="text-end">SEE ALL {">"}</h6>
            </div>
          </div>
          <div className="row bg-white" style={{}}>
            {products.map((product, index) => {
              return (
                <div key={index} className="col-2 mb-2">
                  <ProductTwo
                    name={product.name}
                    image={product.image}
                    actualPrice={product.actualPrice}
                    discountPrice={product.discountPrice}
                  />
                </div>
              );
            })}
          </div>
          {/* Top Deals(Category Name)  */}

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  <h6>CATEGORY|Product</h6>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-header">
                      <h5>Filter</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-8">
                          <h6 style={{ color: "blue" }}>Brands</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end">
                              <FeatherIcon
                                style={{ color: "blue" }}
                                icon="chevron-down"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {brands.map((ct, i) => {
                              return (
                                <CheckBoxForCategory
                                  key={i}
                                  label={ct.label}
                                  count={ct.count}
                                />
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>

                      <hr />
                      <div className="row">
                        <div className="col-8">
                          <h6 style={{ color: "blue" }}>Price</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end">
                              <FeatherIcon
                                style={{ color: "blue" }}
                                icon="chevron-down"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>$125 - $920</p>
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        variant="primary"
                        tooltipPlacement="top"
                        tooltip="on"
                        size="lg"
                      />
                      <hr />
                      <div className="row">
                        <div className="col-8">
                          <h6 style={{ color: "blue" }}>Bags</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end">
                              <FeatherIcon
                                style={{ color: "blue" }}
                                icon="chevron-down"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {bags.map((bag, i) => {
                              return (
                                <CheckBoxForCategory
                                  key={i}
                                  label={bag.label}
                                  count={bag.count}
                                />
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>
                      <hr />
                      <div className="row">
                        <div className="col-8">
                          <h6 style={{ color: "blue" }}>Transmission</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end">
                              <FeatherIcon
                                style={{ color: "blue" }}
                                icon="chevron-down"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {transmission.map((tr, i) => {
                              return (
                                <CheckBoxForCategory
                                  key={i}
                                  label={tr.label}
                                  count={tr.count}
                                />
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>

                      <hr />
                      <div className="row">
                        <div className="col-8">
                          <h6 style={{ color: "blue" }}>User Review</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end">
                              <FeatherIcon
                                style={{ color: "blue" }}
                                icon="chevron-down"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {userreview.map((ur, i) => {
                              return (
                                <CheckBoxForCategory
                                  key={i}
                                  label={ur.label}
                                  count={ur.count}
                                />
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>

                      <hr />

                      <div className="row">
                        <div className="col-8">
                          <h6 style={{ color: "blue" }}>Product Type</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end">
                              <FeatherIcon
                                style={{ color: "blue" }}
                                icon="chevron-down"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {productType.map((pt, i) => {
                              return (
                                <CheckBoxForCategory
                                  key={i}
                                  label={pt.label}
                                  count={pt.count}
                                />
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-6">
                      <h6>Category Name</h6>
                    </div>
                    <div className="col-6">
                      <Link href="#">
                        <a>
                          <div className="row">
                            <p className="text-end">
                              <b>Sort by:</b> popularity{" "}
                              <i className="fa fa-chevron-down" />
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                      <span className="text-gray">183674 products found</span>
                    </div>
                    <div className="col-6">
                      <Link href="#">
                        <a>
                          <div className="row">
                            <p className="text-end">
                              <i className="fa fa-th-large text-yellow" />
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row" style={{}}>
                    {products.map((product, index) => {
                      return (
                        <div key={index} className="col-2 mb-2">
                          <ProductTwo
                            name={product.name}
                            image={product.image}
                            actualPrice={product.actualPrice}
                            discountPrice={product.discountPrice}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5 ms-2 me-1">
          <div className="col-12">
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

export default Listings;
