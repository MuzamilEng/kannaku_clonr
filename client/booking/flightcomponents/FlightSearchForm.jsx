import React from "react";
import {
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import Link from "next/link";

function FlightSearchForm() {
  return (
    <div className="row p-3">
      <div className="card bg-dark p-1">
        <div className="card bg-white p-2">
          <div className="card p-3 bg-dark">
            <div className="row">

              <div className="col-md-6 col-sm-12">
                <div className="row text-white">
                  <div className="col-4 ">
                    <Form.Check

                      type="radio"
                      label="Round Trip"
                      name="practice"
                      id="practice1"
                    />
                  </div>
                  <div className="col-4">
                    <Form.Check

                      type="radio"
                      label="One Way"
                      name="practice"
                      id="practice1"
                    />
                  </div>
                  <div className="col-4">
                    <Form.Check

                      type="radio"
                      label="Multiple City"
                      name="practice"
                      id="practice1"
                    />
                  </div>
                </div>
                <div className="card bg-white p-2">
                  <div className="row p-2">
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Flying from:"
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Flying to:"
                      />
                    </div>
                    
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Flying on: i.e date"
                      />
                    </div>
                   
                  </div>
                  <div className="row p-2">
                  <div className="col-8"></div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Travellers, Class"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="card bg-white">
                  <div className="row p-3">
                    <div className="col-4">
                      <span><b>Passengers</b></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Adults"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Children"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Infants"
                      />
                    </div>
                    <div className="col-4">
                      <span><b>Options</b></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Any cabin"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Any currency"
                      />
                      
                    </div>
                    <div className="col-4">
                      <span><b>Promotional Code</b></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                      <br />
                     <br />

                      <br />
                      <div className="row p-2">
                      <button className="btn bg-dark "><Link className="text-white" href="/booking/flightroundtrip"><a>Search</a></Link></button>
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
  );
}

export default FlightSearchForm;
