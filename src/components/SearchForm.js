import React, { useState } from "react";

const SearchForm = () => {
  const [jobDesc, setJobDesc] = useState("React");
  const [location, setLocation] = useState("London");
  const [isFullTime, setIsFullTime] = useState(false);

  const handleInputChange = (setFunc, event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setFunc(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search");
  };

  return (
    <div className="container">
      <form onSubmit={(event) => handleSearch(event)}>
        <label>
          What?
          <input
            value={jobDesc}
            onChange={(event) => handleInputChange(setJobDesc, event)}
          />
        </label>
        <label>
          Where?
          <input
            value={location}
            onChange={(event) => handleInputChange(setLocation, event)}
          />
        </label>
        <label>
          Full time?
          <input
            type="checkbox"
            checked={isFullTime}
            onChange={(event) => handleInputChange(setIsFullTime, event)}
          />
        </label>
        <input type="submit" value="Search!" />
      </form>
    </div>
  );
};

export default SearchForm;
