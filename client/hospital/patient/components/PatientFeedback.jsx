import React, {useState} from 'react'
import FeatherIcon from 'feather-icons-react'
import Rating from "@material-ui/lab/Rating";

function PatientFeedback() {
    const [ratingValue, setRatingValue] = useState(5);

    return (
        <div className="row rounded border p-2 mb-2">
            <div className="col-1">
               <span className="user-img">
               <img src="/src/assets/img/doctors/drjamahur.png" alt="" />
               </span>
            </div>
            <div className="col-2">
                <p><b>Dr Jamhur Ghifare</b></p>
            </div>
            <div className="col-2">
                <Rating
                    name="Rating Label"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                    setRatingValue(newValue);
                    }}
                /> <span><b>5.0</b></span>
            </div>
            <div className="col-6">
                He’s a good Doctor, kind and know well about the.. <span style={{color:"#14BEF0"}}>More</span>
            </div>
            <div className="col-1">
                <p style={{ textAlign: "end" }}><FeatherIcon icon="more-vertical" /></p>
            </div>
        </div>
    )
}

export default PatientFeedback