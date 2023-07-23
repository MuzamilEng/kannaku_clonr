import React from "react";
import { Form } from "react-bootstrap";

function CheckBoxForCategory({label, count}) {
    return (
        <>
            <div className="col-12">
                <Form.Check
                    type="checkbox"
                    label={label}
                    name="practice"
                    id="practice1"
                />
            </div>
           
        </>
    );
}

export default CheckBoxForCategory;
