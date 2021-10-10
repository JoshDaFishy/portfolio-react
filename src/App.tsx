import { useState } from 'react'
import "./styles/Homepage.scss"
import Homepage from './pages/Homepage'
import Discord from './pages/Discordpage'
import PortfolioPage from './pages/Portfoliopage'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="particle-container">
        <div className="page-bg"></div>
        <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        </div>
      </div>
      
      <Router>
        <Switch> {/* Where the routes will go. */}
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/discord">
            <Discord/>
          </Route>
          <Route exact path="/conqu3red">
            
          </Route>
          <Route exact path="/aboutMe">
            
          </Route>
          <Route exact path="/reddit">
            
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}


export default App
