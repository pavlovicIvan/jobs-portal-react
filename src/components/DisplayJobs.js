// React
import React, { useState } from "react";
import PropTypes from "prop-types";

// Custom components
import JobDetailsModal from "./JobDetailslModal";
import JobInformation from "./JobInformation";

const DisplayJobs = (props) => {
  const { jobs } = props;

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
};

DisplayJobs.defaultProps = {
  jobs: [],
};

export default DisplayJobs;
