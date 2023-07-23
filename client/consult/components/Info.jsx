import React from "react";

import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

function Info() {
  const location = {
    address:
      "New Road, Ester Close, Badore road, Ajah Lagos State, Nigeria LandMark: Pearl Prestige, Bus stop",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <>
      <div className="row p-5">
        <div className="col-5">
          <h3 style={{ color: "#81BA41" }} className="fw-bold">
            New General Hospital
          </h3>
          <p className="fs-4">
            #23 New Road, Ester Close, Badore road, Ajah Lagos State, Nigeria
            LandMark: Pearl Prestige, Bus stop
          </p>
          <div className="row">
            <div className="col-4">
              <button className="bg-black text-white fw-bold pt-2 pb-2 fs-5">
                Call Clinic
              </button>
            </div>
            <div className="col-4">
              <button className="bg-black text-white fw-bold pt-2 pb-2 fs-5">
                Send Email
              </button>
            </div>
            <div className="col-4">
              <button className="bg-black text-white fw-bold pt-2 pb-2 fs-5">
                Our Website
              </button>
            </div>
          </div>
        </div>
        <div className="col-7">Calender here</div>
      </div>
      <div className="row">
        <div className="map mt-3 rounded">
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{
                //   your Api key here
                key: "AIzaSyBt624gLn64GjAfNwU4cSsV7KhuNucNGDw",
              }}
              defaultCenter={location}
              defaultZoom={17}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
