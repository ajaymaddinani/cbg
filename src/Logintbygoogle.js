import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import Dashboard from './Components/Dashboard/Dashboard';
export class Logintbygoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  
    const success = (response) => {
        this.props.history.push({
            pathname: '/Dashboard',
            state: { detail: response.profileObj.givenName }
          })
    }
    const failure = (response) => {
        console.log(response);
        var res = response.profileObj;
        console.log(res);
      }
    return (
      <div className="App">
        <div className="row">
          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <GoogleLogin
                clientId="365309499663-se0udqcf102jspmokbqgf14non0ifuav.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={success}
                onFailure={failure} ></GoogleLogin>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Logintbygoogle