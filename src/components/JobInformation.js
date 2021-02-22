// React
import React from "react";
import PropTypes from "prop-types";

const JobInformation = (props) => {
  const { job, handleSelectJob } = props;

  // Check false url-s
  const companyUrl = job.company_url === "http:" ? null : job.company_url;

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
          <br />
          <span className="jobLocation">{` @  ${job.location}`}</span>
        </div>
        <div className="flexContainer">
          <div className="chipType colorless">
            {new Date(job.created_at).toLocaleDateString("en-US", {
              year: "2-digit",
              month: "2-digit",
            })}
          </div>
          <div className="chipType color">{job.type}</div>
        </div>
      </div>

      <a
        href={companyUrl}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flexContainerColumnRight">
          <div
            style={{
              backgroundColor: "#f7f7f7",
              borderRadius: "50%",
              backgroundImage: `url(${job.company_logo})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "2.8rem",
              width: "2.8rem",
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
