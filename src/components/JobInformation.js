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
      <div>
        <div>
          {job.title} <span>{job.type}</span>
        </div>
        <div>{job.location}</div>
        <div>{job.created_at}</div>
      </div>

      <div>
        <div>
          <img
            src={job.company_logo}
            alt="company_logo"
            className="companyAvatar"
          />
        </div>
        <div>
          <a
            href={job.company_url}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
          >
            {job.company}
          </a>
        </div>
        <div>{`${job.location}`}</div>
      </div>
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
