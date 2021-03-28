import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {title}
        </a>
      </div>
    </nav>
  );
};

//proptypes to check type component props
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
