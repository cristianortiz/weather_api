import React from "react";
import PropTypes from "prop-types";

const Error = ({ msg }) => {
  return <p className="red darken-4 error">{msg}</p>;
};

//proptyopes for types check un component props
Error.propTypes = {
  msg: PropTypes.string.isRequired,
};
export default Error;
