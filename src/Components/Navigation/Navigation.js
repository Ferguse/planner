import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation = props => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to="/projects" activeClassName="nav__linl--active" className="nav__link"> Проекты </NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/users" activeClassName="nav__linl--active" className="nav__link"> Люди </NavLink>
            </li>
        </ul>
    </nav>
)

export default Navigation;
