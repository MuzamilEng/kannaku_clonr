import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

function search_area() {
  
  return (
    <div className="row">
      <div className="searchArea col-12">
     
        <div className="row mt-4">
          <div className="col-1"></div>
          <div className="col-md-11 col-12">
            <h3 className="fw-bold text-black">
              Find top consultants from across the world from the comfort of
              your home
            </h3>
          </div>
        </div>

        <div className="row p-3">
          <form>
            <div className="row">
              <div className="col-4">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Condition, procedure, doctor name ..."
                    aria-label="First name"
                  />
                </div>
              </div>

              <div className="col-4">
                
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><i className="fa fa-map-marker" style={{ color: "red" }} aria-hidden="true"></i></InputGroup.Text>
                  <FormControl
                    placeholder="City or Location"
                    aria-label="City or Location"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-10">
                
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                      <FormControl
                        placeholder="Health Insurance"
                        aria-label="Health Insurance"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-primary bg-dark">
                      <i className="fa fa-search fa-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="row mt-1">
          <div className="col-md-2"></div>
          <div className="col-md-10 col-12">
            <p className="text-gray fw-bold fs-3 pl-5">Welcome, Patrick</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default search_area;
