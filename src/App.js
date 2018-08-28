import React, { Component } from 'react';
import '../src/containers/App.css';
import Login from './containers/login/login-container';
import CreatePatient from './containers/create-patient/create-patient-container';
import PatientList from './containers/patient-list/patient-list-container';
import UserRegistration from './containers/login/registration-container';
import {HashRouter, Route, Link, Redirect} from 'react-router-dom';


class App extends Component {
  constructor(props) {
		super(props);

	}
  render() {
    return (
      <HashRouter basename="/">
        <div>
            <div>
              <div>
                <Redirect to={'/login'} />
                <Route exact path="/login" render={(props) => ( <Login routerProps={props}/> )} />
                <Route exact path="/patientList" render={(props) => ( <PatientList routerProps={props}/> )} />
                <Route exact path="/createPatient" render={(props) => ( <CreatePatient routerProps={props}/> )} />
                <Route exacr path="/userRegistration" render={(props) => ( <UserRegistration routerProps={props}/> )} />
              </div>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
