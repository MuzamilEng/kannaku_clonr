import React from 'react'
import { FormControl, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import Link from 'next/link';

function SearchForm() {
  return (
    <div className="row p-3">
          <form>
            <div className="row">
             

              <div className="col-3">

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><i className="fa fa-map-marker" style={{ color: "red" }} aria-hidden="true"></i></InputGroup.Text>
                  <FormControl
                    placeholder="Your City"
                    aria-label="Your City"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

              </div>

              <div className="col-3">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Check in"
                  />
                </div>
              </div>
              <div className="col-3">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Check out"
                    aria-label="First name"
                  />
                </div>
              </div>

              <div className="col-3">
                <div className="row">
                  <div className="col-8">

                  <DropdownButton
                      variant="outline-secondary"
                      title=" Rooms/People "
                      id="basic-addon1"
                      className="w-full"
                  >
                      <Dropdown.Item href="#">Rooms</Dropdown.Item>
                  </DropdownButton>
                  </div>
                  <div className="col-4">
                    <Link href="/booking/hotelsearch"> 
                      <a>

                        <button className="btn btn-primary bg-dark">
                            Search
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
  )
}

export default SearchForm