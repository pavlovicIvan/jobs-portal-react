// React
import React, { useState } from "react";

// Layout
import Header from "./layout/Header";

// Components
import SearchForm from "./components/SearchForm";
import DisplayJobs from "./components/DisplayJobs";

// Styling
import "typeface-roboto";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <>
      <Header />
      <SearchForm setJobs={setJobs} />
      <DisplayJobs jobs={jobs} />
    </>
  );
};

export default App;
