// React
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Custom functions
import callApi from "../helpers/functions";

// Custom strings
const api = "https://github-jobs-proxy.appspot.com/positions";

const SearchForm = (props) => {
  const { setJobs, setLoading } = props;

  const [jobDesc, setJobDesc] = useState("React");
  const [location, setLocation] = useState("New York");
  const [isFullTime, setIsFullTime] = useState(false);

  const scrollToRef = useRef();

  // Call api on first render
  useEffect(() => {
    callApi(
      `${api}?description=${jobDesc}&location=${location}&full_time=${isFullTime}`,
      setLoading,
      setJobs
    );
  }, []);

  const handleInputChange = (setFunc, event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setFunc(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    setJobs([]);

    callApi(
      `${api}?description=${jobDesc}&location=${location}&full_time=${isFullTime}`,
      setLoading,
      setJobs
    );

    scrollToRef.current.scrollIntoView();
  };

  return (
    <form onSubmit={(event) => handleSearch(event)}>
      <div className="container">
        <div className="intro">Take your career to the next level</div>
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
      <div ref={scrollToRef} />
    </form>
  );
};

SearchForm.propTypes = {
  setJobs: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default SearchForm;
