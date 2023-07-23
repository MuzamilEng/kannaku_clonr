import React from "react";
import { Form } from "react-bootstrap";

function CheckBoxForCategory({label, count}) {
    return (
        <>
            <div className="col-9">
                <Form.Check
                    type="checkbox"
                    label={label}
                    name="practice"
                    id="practice1"
                />
            </div>
            <div className="col-3">
                <p className="text-end">{count}</p>
            </div>
        </>
    );
}

export default CheckBoxForCategory;
