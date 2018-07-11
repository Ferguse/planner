import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import 'normalize.css'

//components
import Admin from '../Admin';
import Users from '../Users';
import Projects from '../Projects';
import Navigation from '../Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      month: null,
      year: null
    }
    this.changeMonth = this.changeMonth.bind(this)
  }

  componentWillMount() {
    this.setState({
      month: 1,
      year: 2017
    })
  }

  changeMonth(bool) {
    let month = this.state.month;
    let year = this.state.year;
    month = (bool) ? month + 1 : month - 1;

    if (month > 11) {
      month = 0;
      year = year + 1;
    }

    if (month < 0) {
      month = 11;
      year = year - 1;
    }
    this.setState({
      month: month,
      year: month
    });
  }

  render() {
    return (
      <Router>
        <main role="main">
          <Navigation/>
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <Redirect
                  to="/users"
                  month={this.state.month}
                  year={this.state.year}
                  changeMonth={this.changeMonth}
                />
              )}
            />
            <Route
              exact
              path="/admin"
              changeMonth={this.changeMonth}
              render={() => (
                <Admin/>
              )}
            />
            <Route
              exact
              path="/users"
              render={() => (
                <Users
                  changeMonth={this.changeMonth}
                  onAddUser={this.props.onAddUser}
                  month={this.state.month}
                  year={this.state.year}
                />
              )}
            />
            <Route
              exact
              path="/projects"
              render={() => (
                <Projects
                  changeMonth={this.changeMonth}
                  onAddProject={this.props.onAddProject}
                  month={this.state.month}
                  year={this.state.year}
                />
              )}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddUser: (user) => {
      dispatch({type: 'ADD_USER', payload: user})
    },
    onAddProject: (project) => {
      dispatch({type: 'ADD_PROJECT', payload: project})
    }
  })
)(App);
