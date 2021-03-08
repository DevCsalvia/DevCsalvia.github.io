import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Likes from '../../../containers/Likes/Likes';

const Toolbar = props => {
    return (
        <header className={classes.Toolbar + ' Toolbar'}>
            <div className={classes.Logo}>
                <NavLink exact
                    to="/">
                    <Logo />
                </NavLink>
            </div>

            <nav className={classes.Navigation_Wrapper}>
                <NavigationItems className={classes.Navigation} />
            </nav>

            <Likes />
        </header>
    );
};

export default Toolbar;