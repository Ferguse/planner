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
import Title from '../Navigation/Navigation'

class App extends Component {
    render() {
        return (
            <Router>
                <main className="App" role="main">
                    <Title/>
                    <Header/>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/users" />)} />
                        <Route exact path="/users" render={() => (<Users onAddUser={this.props.onAddUser}/> )}/>
                        <Route exact path="/projects" render={() => (<Projects onAddProject={this.props.onAddProject}/> )}/>
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
