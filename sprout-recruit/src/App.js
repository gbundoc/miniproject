import React from 'react';
import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import JobApplicationsList from "./components/pages/JobApplicationsList";
import JobApplicationsPost from "./components/pages/JobApplicationsPost";

import './styles.css';

const App = () => (
  <div>
    <Header />
    <div>
      <Route path="/jobapplicationslist" exact component={JobApplicationsList} />
      <Route path="/jobapplicationspost" exact component={JobApplicationsPost} />
    </div>
  </div>
);

export default App;
