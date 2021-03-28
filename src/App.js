import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  //main useState hook to handle to receiv and keep track of the data from the Form component
  const [search, handleSearch] = useState({
    city: "",
    country: "",
  });

  //destructuring the search State values
  const { city, country } = search;

  //useState hook to use as dependency for useEffect hook and reload UI data when the API is called
  const [request, handleRequest] = useState(false);

  //useState hook to keep track of the result of requestAPI
  const [result, handleResult] = useState({});

  //useState hook to keep track an error in the response of request API
  const [errorCode, handleErrorCode] = useState(false);

  //useEffect hook to request API and reload the UI in every new request
  useEffect(() => {
    const requestAPI = async () => {
      if (request) {
        const appID = "you API key";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;
        const response = await fetch(url);
        const result = await response.json();
        //put the response object from the API in the Statate
        handleResult(result);
        //reset useEffect function to make a new API request
        handleRequest(false);
        if (result.cod === "404") {
          handleErrorCode(true);
          console.log(result.cod);
        } else {
          handleErrorCode(false);
        }
      }
    };
    requestAPI();
  }, [request, city, country, errorCode]);

  let comp;

  //conditional component load
  if (errorCode) {
    comp = <Error msg="No results for the location" />;
  } else {
    comp = <Weather result={result} />;
  }

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
            <div className="col m6 s12">{comp}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
