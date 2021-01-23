// React
import React from "react";

// Layout
import Header from "./layout/Header";

// Components
import SearchForm from "./components/SearchForm";
import DisplayJobs from "./components/DisplayJobs";

// Styling
import "./App.css";

const App = () => (
  <>
    <Header />
    <SearchForm />
    <DisplayJobs />
  </>
);

export default App;
