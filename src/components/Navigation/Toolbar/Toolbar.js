import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Likes from '../../LikesList/LikesList';
import ShoppingCart from '../../ShoppingCart/ShoppingCart';

const Toolbar = (props) => {
    const [likesVisibility, setLikesVisibility] = useState(false);

    const likeIconBtnClickedHandler = () => {
        setLikesVisibility(!likesVisibility);
    }

    const dispatch = useDispatch();

    return (
        <header className={classes.Toolbar + ' Toolbar'}>
            <div className={classes.Logo}>
                <NavLink exact
                    to="/">
                    <Logo />
                </NavLink>
            </div>

            <nav className={classes.Navigation_Wrapper}>
                <NavigationItems
                    className={classes.Navigation}
                    likeBtnClicked={likeIconBtnClickedHandler}
                    likeIconState={likesVisibility}
                    cartIconClicked={() => dispatch(actions.cartVisibilityToggle())}
                />
            </nav>
            <Likes likeState={likesVisibility} closeBtnHandler={likeIconBtnClickedHandler} />
            <ShoppingCart />
        </header>
    )
};

export default Toolbar;