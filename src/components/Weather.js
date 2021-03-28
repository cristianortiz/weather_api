import React from "react";
import PropTypes from "prop-types";
const Weather = ({ result }) => {
  //destructuring values from the result object
  const { name, main } = result;
  //the main.temp field is in kelvin degree, transform to Celcius
  const kelvin = 273.15;

  if (!name) return null;
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>the Weather in {name} is:</h2>
        <p className="temperature">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          Min Temperature:
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          {" "}
          Max Temperature:
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
//proptyopes for types check un component props
Weather.propTypes = {
  result: PropTypes.object.isRequired,
};
export default Weather;
