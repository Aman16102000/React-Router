import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";

import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
class Cq extends React.Component{
  render()
  {
    return(
      <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-3d col-sm-3">
            <Link to="/SignIn"><h5>SignIn</h5></Link>
          </div>
          <div className="col-3d col-sm-3">
            <Link to="/SignUp"><h5>SignUp</h5></Link>
          </div>
       
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 mt-5">
            <Switch>
              <Route exact path="/SignIn" component={SignIn}></Route>
              <Route exact path="/SignUp" component={SignUp}></Route>
            </Switch>
          </div>
        </div>
      </div>
      </BrowserRouter>
    )
  }
}
export default Cq;