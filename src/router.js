import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './component/home/Home.js';
import Shelf from './component/shelf/Shelf.js';

export default (
    
    <Switch>
        <Home />
      <Route component={ Shelf } path="/create/A1"/>
      <Route component={ Shelf } path="/bin/A2" /> 
      <Route component={ Shelf } path="/bin/A3" />
      <Route component={ Shelf } path="/bin/A4" /> 
      <Route component={ Shelf } path="/bin/A5" />
    </Switch>
  )