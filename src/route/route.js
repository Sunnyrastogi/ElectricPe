import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Main from "../pages/main.js";
import AboutUs from "../pages/about.js";
import Api from "../pages/api.js";
import Rentev from "../pages/Rentev.js";
import Contactus from "../pages/contactus.js";
import Home from "../pages/station.js";
import Station from "../pages/station.js";
import YourComponent1 from "../pages/api.js";
import YourComponent2 from "../pages/addnewapi.js";
import YourComponent3 from "../pages/modify.js";
import YourComponent4 from "../pages/delete.js";
import YourComponent5 from "../pages/blog.js";
import YourComponent6 from "../pages/station.js";
const Routing = () => {
  return (
    <Switch>
       <Route exact path= "/"  component ={Main}/>
       <Route path="/station" component={Station}/>
       <Route path= "/station"  component={Home}/>
      <Route path="/about" component={AboutUs} /> 
      <Route path="/api" component ={Api} /> 
      <Route path="/rent-ev" component ={Rentev} /> 
      <Route path="/contactus" component ={Contactus} /> 
      <Route path="/action/3.1" component={YourComponent1} />
      <Route path="/action/3.2" component={YourComponent2} />
      <Route path="/action/3.3" component ={YourComponent3}/>
      <Route path="/action/3.4" component ={YourComponent4}/>
      <Route path ="/action/4.1" component={YourComponent5}/>
      <Route path ="/action/4.2" component={YourComponent6}/>
    </Switch>
  );
};

export default Routing;