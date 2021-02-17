// React
import React from "react";
import PropTypes from "prop-types";

const JobInformation = (props) => {
  const { job, handleSelectJob } = props;

  return (
    <div
      className="jobContainer"
      role="button"
      tabIndex={0}
      onClick={() => handleSelectJob(job)}
      onKeyPress={() => handleSelectJob(job)}
    >
      <div className="flexContainerColumnSpaced">
        <div>
          <span className="jobTitle">{job.title}</span>
          <span>{` @  ${job.location}`}</span>
        </div>
        <div className="flexContainer">
          <div className="chipType colorless">
            {new Date(job.created_at).toLocaleDateString()}
          </div>
          <div className="chipType color">{job.type}</div>
        </div>
      </div>

      <a href={job.company_url} target="_blank" rel="noreferrer" tabIndex={-1}>
        <div className="flexContainerColumnRight">
          <div
            style={{
              backgroundImage: `url(${job.company_logo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "2.5rem",
              width: "2.5rem",
            }}
          />
          <div className="jobCompanyName">{job.company}</div>
        </div>
      </a>
    </div>
  );
};

JobInformation.propTypes = {
  job: PropTypes.oneOfType([PropTypes.object]),
  handleSelectJob: PropTypes.func,
};

JobInformation.defaultProps = {
  job: [],
  handleSelectJob: () => {},
};

export default JobInformation;
