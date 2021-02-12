import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
  } from "react-router-dom";
  import SignUp from './SignUp.js';
class SignIn extends React.Component{
    render(){
        return(
            <div><br></br>
                <div className="row">
                    <div className="col-12 col-sm-12">
                       <h1  >SignIn</h1> 
                    </div>
                    </div><br></br>
                <form>
                    <div className="form-group">
                    <label for="username">User name</label>
                    <input type="text" id="username" className="form-control" placeholder="First name"/>

                    </div>
               
                  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/SignUp"><h5>SignUp</h5></Link>
  <Switch>
      <Route exact path="/SignUp" component={SignUp}></Route>
  </Switch>
                </form>
            </div>
        )
    }
}
export default SignIn;