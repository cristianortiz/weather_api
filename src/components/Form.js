import React, { useState } from "react";

const Form = ({ search, handleSearch, handleRequest }) => {
  //form useState hook to keep track of the user inputs in the form
  /* const [search, handleSearch] = useState({
    city: "",
    country: "",
  }); we can ignore this and declare on global useState hooke in the app componment
    and used in any component like tis one Form
  */

  const [error, handleError] = useState(false);

  //destructuring state values
  const { city, country } = search;

  //put the user inputs values in the state
  const handleInputChange = (e) => {
    //accessing the state trough is definend handle function
    handleSearch({
      ...search, //copy uf the user state
      [e.target.name]: e.target.value, //values from the for event onChange
    });
  };

  //when the user submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    //valiting the form trough error useState hook
    if (city.trim() === "" || country.trim() === "") {
      handleError(true);
      return;
    }
    //sets errot to false if validation is passed, remove any previous error msg
    handleError(false);
    handleRequest(true);

    //passing the data form to App component trough their state handleFunction
    /*handlesearch({
      ...search,
      city: city,
      country: country,
    });*/
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">All fields are mandatory</p>
      ) : null}
      <div className="input-field col 12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleInputChange}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col 12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleInputChange}
        >
          <option value="">--Select Country</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option>
          <option value="CL">Chile</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Search Weather"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Form;
