import React from "react";
import {
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import Link from "next/link";

function CarSearchForm() {
  return (
    <div className="row p-3">
      <form>
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="row">
              <div className="col-5" style={{ marginRight: "-20px", width: "9em" }}>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Location"
                  />
                </div>
              </div>
              <div className="col-2">
                <i className="fa fa-arrow-right text-blue" aria-hidden="true"></i> <br />
                <i className="fa fa-arrow-left text-blue" aria-hidden="true"></i>
              </div>
              <div className="col-5" style={{ marginLeft: "-30px", width: "9em" }}>

                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Destination"
                    aria-label="First name"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className='text-center'> <b >Trip Schedule</b></div>
           
            <div className="row">
              <div className="col-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="booknow" />
                  <label className="form-check-label" htmlFor="booknow">
                  Book now
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="booklater" />
                  <label className="form-check-label" htmlFor="booklater">
                  Book later
                  </label>
                </div>

              </div>
            </div>

          </div>

          <div className="col-3">
            <div className="text-center"><b>Trip Route</b></div>
            <div className="row">
              <div className="col-5">
                <Form.Check

                  type="checkbox"
                  label="One Way"
                  name="practice"
                  id="practice1"
                />
              </div>
              <div className="col-7">
                <Form.Check

                  type="checkbox"
                  label="Return Trip"
                  name="practice"
                  id="practice1"
                />
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="text-center"><b>Billing Scope</b></div>
            <div className="row">
              <div className="col-5">
                <Form.Check

                  type="checkbox"
                  label="Self Pay"
                  name="practice"
                  id="practice1"
                />
              </div>
              <div className="col-7">
                <Form.Check

                  type="checkbox"
                  label="Split Billing"
                  name="practice"
                  id="practice1"
                />
              </div>
            </div>

          </div>


        </div>
        <hr />
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-6">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date"
                    aria-label="First name"
                  />
                </div>
              </div>

              <div className="col-6">
                <DropdownButton
                  variant="outline-secondary"
                  title=" Car Usage"
                  id="basic-addon1"
                  className="w-full"
                >
                  <Dropdown.Item href="#">Passenger Convinience</Dropdown.Item>
                  <Dropdown.Item href="#">Good Convinience</Dropdown.Item>
                  <Dropdown.Item href="#">All</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>

          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="# of passengers"
              aria-label="number of passengers"
            />
          </div>
          <div className="col-2">
            <DropdownButton
              variant="outline-secondary"
              title="Transit Mode"
              id="basic-addon1"
              className="w-full"
            >
              <Dropdown.Item href="#">Within City</Dropdown.Item>
              <Dropdown.Item href="#">Inter State</Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="col-2">
            <DropdownButton
              variant="outline-secondary"
              title="Traveller Class"
              id="basic-addon1"
              className="w-full"
            >
              <Dropdown.Item href="#">Adults</Dropdown.Item>
              <Dropdown.Item href="#">Children</Dropdown.Item>
              <Dropdown.Item href="#">Infants</Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="col-3">
           <div className="row">
           <div className="col-6">

<DropdownButton
  variant="outline-secondary"
  title=" Car Class"
  id="basic-addon1"
  className="w-full"
>
  <Dropdown.Item href="#">Luxury</Dropdown.Item>
  <Dropdown.Item href="#">Premium</Dropdown.Item>
  <Dropdown.Item href="#">Classic</Dropdown.Item>
  <Dropdown.Item href="#">Standard</Dropdown.Item>
</DropdownButton>
</div>
<div className="col-6">
<div className="row">
    <Link href="/booking/cardetails">
      <a>

        <button
          className="btn btn-primary"
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          Book Now
        </button>
      </a>
    </Link>
</div>
</div>
           </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarSearchForm;
