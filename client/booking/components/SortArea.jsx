import React from "react";
import RangeSlider from 'react-bootstrap-range-slider';
import { Dropdown, InputGroup, DropdownButton } from "react-bootstrap";

function SortArea() {
  const [ value, setValue ] = React.useState(50);

  return (
    <div className="row mt-4">
      <div className="com-12 sortArea ">
        <form>
          <div className="row">
            <div className="col-3">
              
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i className="fa fa-filter" aria-hidden="true"></i></InputGroup.Text>
                <DropdownButton
                  variant="outline-secondary"
                  title="Sorted by Operational"
                  id="basic-addon1"
                  className="w-full"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="col-3 pt-2">
                  <label htmlFor="distance" className="form-label fw-bold">
                    Distance
                  </label>
                </div>
                <div className="col-9">
                 <RangeSlider
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  variant='danger'
                  tooltipPlacement='top'
                  tooltip='on'
                  size="lg"
                />
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="col-6 fw-bold"><p className="ms-5 pt-2">Hours:</p></div>
                <div className="col-6">
                  <button className="btn btn-secondary bg-white text-dark">
                    Open Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="col-6 fw-bold"><p className="ms-5 pt-2">Delivery:</p></div>
                <div className="col-6">
                  <button className="btn btn-secondary bg-white text-dark">
                    Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SortArea;
