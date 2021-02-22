// React
import React, { useState } from "react";
import PropTypes from "prop-types";
import nothingFound from "../assets/images/nothingFound.svg";

// Custom components
import JobDetailsModal from "./JobDetailslModal";
import JobInformation from "./JobInformation";

const DisplayJobs = (props) => {
  const { jobs, loading } = props;

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  const handleSelectJob = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <>
      <JobDetailsModal
        job={selectedJob}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="allJobsContainer">
        {loading && (
          <>
            <div className="spacer" />
            {[0, 1, 2, 3, 4].map((skeleton) => (
              <div key={skeleton} className="jobContainerSkeleton" />
            ))}
          </>
        )}
        {jobs.length > 0 && (
          <>
            <div className="title">We found this:</div>{" "}
            <div className="divider" />
          </>
        )}
        {jobs.length === 0 && !loading && (
          <div className="noMatchContainer">
            <div className="title">
              Nothing found. Please try with different search terms.
            </div>
            <img src={nothingFound} className="noMatchImg" alt="no match" />
          </div>
        )}
        {jobs.map((job) => (
          <JobInformation
            key={job.id}
            job={job}
            handleSelectJob={handleSelectJob}
          />
        ))}
      </div>
    </>
  );
};

DisplayJobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

DisplayJobs.defaultProps = {
  jobs: [],
  loading: false,
};

export default DisplayJobs;
