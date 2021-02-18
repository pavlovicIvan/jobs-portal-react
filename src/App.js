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
      <DisplayJobs jobs={jobs} loading={loading} />
    </>
  );
};

export default App;
