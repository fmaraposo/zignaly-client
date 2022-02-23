import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Actions from '../src/store/action'
import PhoneListContainer from '../src/components/PhoneListContainer';
import PhoneDetailComponent from '../src/components/PhoneDetailComponent';
import Navbar from '../src/components/Navbar';

function App({ getMobiles}) {

  useEffect(() => getMobiles(), [])

  return (
    <Router>
      <div id="navbar-container">
        <Navbar />
      </div>
      <main id="main-content">
        <Routes>
          <Route path="/:id" element={<PhoneDetailComponent />} />
          <Route path="/" element={<PhoneListContainer />} />
        </Routes>
      </main>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  getMobiles: () => dispatch(Actions.getMobiles())
});

export default connect(null, mapDispatchToProps)(App);
