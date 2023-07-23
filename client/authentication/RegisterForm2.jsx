// import Card from "react-bootstrap/esm/Card";
import Link from "next/link";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const RegisterForm2 = ({ values, sendInfo, prevStep }) => {
  return (
    <Card>
      <div className="login-wrapper" style={{ paddingTop: "0" }}>
        <div>
          <div className="loginbox" style={{ padding: "0rem" }}>
            <div className="login-right" style={{ padding: "0rem 2rem" }}>
              <div className="login-right-wrap">
                <h1>Adventure starts here</h1>
                <p className="account-subtitle">
                  Making app management easy and fun!
                </p>

                {/* Form */}
                <form>
                  <div className="form-group">
                    <label className="form-control-label">
                      Merchant Category
                    </label>
                    <Form.Control
                      as="select"
                      aria-label="Default select example"
                    >
                      <option>Select Main Category</option>
                      <option value="1">Health</option>
                      <option value="2">Transport</option>
                      <option value="3">Legal</option>
                      <option value="4">Business Consulting</option>
                    </Form.Control>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Sub Category</label>
                    <Form.Control
                      as="select"
                      aria-label="Default select example"
                    >
                      <option>Select Sub Category</option>
                      <option value="1">Doctor</option>
                      <option value="2">Hospital</option>
                      <option value="3">Lab Test</option>
                      <option value="4">Pharmacy</option>
                      <option value="5">HMO</option>
                    </Form.Control>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">KYC Validation</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter License Number"
                      value={values.password}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Label>Merchant Business Document</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">ID Card Type</label>
                    <Form.Control
                      as="select"
                      aria-label="Default select example"
                    >
                      <option>Type of Card</option>
                      <option value="1">National ID Card</option>
                      <option value="2">Driving License</option>
                    </Form.Control>
                  </div>
                  <div className="form-group">
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Label>Merchant ID Card</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </div>

                  <div className="form-group mb-0">
                    <button
                      className="btn btn-block btn-secondary w-49"
                      style={{ marginRight: "5px" }}
                      onClick={prevStep}
                      type="button"
                    >
                      Return Back
                    </button>
                    <button
                      className="btn btn-block btn-primary w-49"
                      onClick={sendInfo}
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RegisterForm2;
