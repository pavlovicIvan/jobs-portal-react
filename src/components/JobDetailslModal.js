// React
import React, { useRef } from "react";
import PropTypes from "prop-types";

// Custom components
import JobInformation from "./JobInformation";

const JobDetailslModal = (props) => {
  const { job, showModal, setShowModal } = props;

  const modalRef = useRef();

  // Close modal when clicked outside
  window.onclick = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // Close modal on escape
  document.onkeydown = (event) => {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  };

  return (
    <div
      ref={modalRef}
      className="modal"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modalContent">
        <JobInformation job={job} />
        <div
          dangerouslySetInnerHTML={{ __html: job.description }}
          className="descriptionContainer"
        />
      </div>
    </div>
  );
};

JobDetailslModal.propTypes = {
  job: PropTypes.oneOfType([PropTypes.object]),
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

JobDetailslModal.defaultProps = {
  job: {},
  showModal: false,
  setShowModal: () => {},
};

export default JobDetailslModal;
