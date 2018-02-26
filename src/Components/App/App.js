import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import 'normalize.css'

//styles
import './App.css';

//components
import Header from '../Header/Header';
import Users from '../Users/Users';
import Projects from '../Projects/Projects';
import Navigation from '../Navigation/Navigation'

class App extends Component {
  constructor(props) {
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
    })
    console.log(month)
  }
    render() {
        return (
            <Router>
                <main className="App" role="main">
                    <Navigation/>
                    <Header
                      month={this.state.month}
                      year={this.state.year}
                      changeMonth={this.changeMonth}
                    />
                    <Switch>
                        <Route
                          exact path="/"
                          render={() => (
                            <Redirect
                              to="/users"
                              month={this.state.month}
                              year={this.state.year}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/users"
                          render={() => (
                            <Users
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
