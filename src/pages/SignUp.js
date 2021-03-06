import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
  } from "react-router-dom";
  import SignIn from './SignIn.js';
class SignUp extends React.Component{
    render(){
        return(
            <div><br></br>
                 <div className="row">
                    <div className="col-12 col-sm-12">
                       <h1  >SignUp</h1> 
                    </div>
                    </div><br></br>
                <form>
                    <div className="form-group">
                    <label for="username">User name</label>
                    <input type="text" id="username" className="form-control" placeholder="First name"/>

                    </div>
                <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/SignIn"><h5>SignIn</h5></Link>
  <Switch>
      <Route exact path="/SignIn" component={SignIn}></Route>
  </Switch>
                </form>
            </div>
        )
    }
}
export default SignUp;