import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './component/home/Home.js';
import Shelf from './component/shelf/Shelf.js';

export default (
    <div>
    
    <Switch>
      <Route component={ Home } exact path='/'/>
      <Route component={ Shelf } path="/bins/A"/>

    </Switch>
    </div>
  )