import React from "react";

import { ProgressBar } from "react-bootstrap";
function Progress({progress}) {
  return (
    <ProgressBar variant="info" now={progress}/>
  );
}

export default Progress;
