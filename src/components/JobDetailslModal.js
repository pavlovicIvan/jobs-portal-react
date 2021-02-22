// React
import React, { useRef } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

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
    <>
      {showModal && (
        <div
          className="fab"
          onClick={() => setShowModal(false)}
          onKeyPress={() => setShowModal(false)}
          role="button"
          tabIndex={0}
        >
          CLOSE
        </div>
      )}
      <div
        ref={modalRef}
        className="modal"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modalContent">
          <JobInformation job={job} />
          <div className="title">Job description</div>
          <div className="divider" />
          <div className="descriptionContainer">
            {parse(job.description || "")}
          </div>
          <div className="title">How to apply?</div>
          <div className="divider" />
          <div className="descriptionContainer">
            {parse(job.how_to_apply || "")}
          </div>
        </div>
      </div>
    </>
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
