// React
import React, { useState } from "react";
import PropTypes from "prop-types";

// Custom hooks
import useFetch from "../hooks/useFetch";

const SearchForm = (props) => {
  const { setJobs } = props;

  const [jobDesc, setJobDesc] = useState("React");
  const [location, setLocation] = useState("San Francisco");
  const [isFullTime, setIsFullTime] = useState(false);

  const handleInputChange = (setFunc, event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setFunc(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${jobDesc}&location=${location}&full_time=${isFullTime}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setJobs(result);
          console.log("result", result);
        },
        (error) => {
          console.log("error", error);
        }
      );
  };

  return (
    <form onSubmit={(event) => handleSearch(event)}>
      <div className="container">
        <label>
          What?
          <input
            type="text"
            value={jobDesc}
            onChange={(event) => handleInputChange(setJobDesc, event)}
          />
        </label>
        <label>
          Where?
          <input
            type="text"
            value={location}
            onChange={(event) => handleInputChange(setLocation, event)}
          />
        </label>
        <label className="checkBoxLabel">
          <input
            type="checkbox"
            checked={isFullTime}
            onChange={(event) => handleInputChange(setIsFullTime, event)}
          />
          Full time?
        </label>
        <input type="submit" value="SEARCH" />
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  setJobs: PropTypes.func.isRequired,
};

export default SearchForm;
