import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import * as actions from '../../store/actions/index';

import './LikesList.css';
import Like from './Like/Like';

const LikesList = (props) => {
    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    const likes = useSelector(state => state.like.likes);

    /* Likes Functionality useCallback is used to not to recreate function inside*/
    const onInitLikes = useCallback(
        () => dispatch(actions.initLikes()),
        [dispatch]
    );

    /* Likes Initializing from LocalStorage*/
    useEffect(() => {
        onInitLikes();
    }, [onInitLikes]);

    let likesListMarkup = [];

    if (likes) likesListMarkup = Object.keys(likes).map(key => <Like
        itemData={likes[key]}
        key={likes[key].id} />);

    if (likesListMarkup.length === 0) likesListMarkup = <li className="LikesList__Empty_Title">No Likes Yet</li>

    return (
        <div className={`LikesList__Wrapper ${props.likeState ? 'LikesList__Wrapper--Visibility' : ''} `}>
            <div className="LikesList__Title-Wrapper">
                <span>WISHLIST</span>
                <div className="LikesList__Close" onClick={props.closeBtnHandler}></div>
            </div>
            <ul className="LikesList">
                {likesListMarkup}
            </ul>
        </div>
    );
};

export default LikesList;