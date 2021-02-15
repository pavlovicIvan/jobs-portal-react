// React
import React, { useState } from "react";

// Layout
import Header from "./layout/Header";

// Components
import SearchForm from "./components/SearchForm";
import DisplayJobs from "./components/DisplayJobs";

// Styling
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <SearchForm setJobs={setJobs} setLoading={setLoading} />
      {loading && <div className="container">Loading...</div>}
      <DisplayJobs jobs={jobs} />
    </>
  );
};

export default App;
