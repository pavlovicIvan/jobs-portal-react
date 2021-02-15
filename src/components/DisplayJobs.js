// React
import React from "react";
import PropTypes from "prop-types";

const DisplayJobs = (props) => {
  const { jobs } = props;

  return (
    <div className="allJobsContainer">
      {jobs.map((job) => (
        <div className="jobContainer" key={job.id}>
          {`${job.title} @ ${job.location}`}
        </div>
      ))}
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
