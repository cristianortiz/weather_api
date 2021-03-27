import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  //main useState hook to handle to receiv and keep track of the data from the Form component
  const [search, handleSearch] = useState({
    city: "",
    country: "",
  });

  const [request, handleRequest] = useState(false);

  //destructurin the search State values
  const { city, country } = search;

  //useEffect hook to detect changes in the useState data and reload the UI to show those changes
  useEffect(() => {
    //to check if is capturing the changes
    console.log(city);
  }, [request, city, handleRequest]);

  return (
    <Fragment>
      <Header title="Weather API - React" />

      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                handleSearch={handleSearch}
                handleRequest={handleRequest}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
