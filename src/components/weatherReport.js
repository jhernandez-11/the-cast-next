import React from "react";

const weatherReport = (props) => (
  <React.Fragment>
    <div className=" w-5/12">
      <h2>Location - </h2>
      <p className="text-blue-300 mt-6">
        {props.location ? props.location : null}
      </p>
    </div>
    <div className="w-5/12">
      <h2>Current Forecast - </h2>
      <p className="text-blue-300 mt-6">
        {props.currentForecast ? props.currentForecast : null}
      </p>
    </div>
  </React.Fragment>
);

export default weatherReport;
