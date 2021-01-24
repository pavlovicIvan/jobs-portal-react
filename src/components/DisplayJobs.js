// React
import React from "react";
import PropTypes from "prop-types";

const DisplayJobs = (props) => {
  const { jobs } = props;

  return (
    <div className="container">
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{`${job.title} @ ${job.location}`}</li>
        ))}
      </ul>
    </div>
  );
};

DisplayJobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object),
};

DisplayJobs.defaultProps = {
  jobs: [],
};

export default DisplayJobs;
