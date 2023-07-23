import React from "react";
import Image from "next/image";
import { ProgressBar } from "react-bootstrap";
import Link from "next/link";

function product({ image, name, discountPrice, actualPrice, itemsLeft }) {
  return (
    <div>
      <div className="col me-2 p-2 product">
        <Link href="/ecommerce/details">
          <a>
            <Image
              src={image}
              alt=""
              layout="responsive"
              style={{ borderRadius: "30px" }}
            />
            <span className="text-dark">{name}</span>
            <h5 className="fw-4 text-dark">${discountPrice}</h5>
            <h6 className="text-gray">
              <del>${actualPrice}</del>
            </h6>
            <span className="text-dark">{itemsLeft} items left</span>
            <ProgressBar
              style={{ height: "6px" }}
              variant="warning"
              now={20}
              // label={`${progress}%`}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default product;
