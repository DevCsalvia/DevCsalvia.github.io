import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LikesList from '../../components/LikesList/LikesList';

import * as actions from '../../store/actions/index';

const Likes = (props) => {
    /* Hooks Way to work with Redux Dispatch(useDispatch) and Get Access To Redux Store(useSelector) */
    const dispatch = useDispatch();

    const likes = useSelector(state => state.like.likes);

    /* Likes Functionality useCallback is used to not to recreate function inside*/
    const onInitLikes = useCallback(
        () => dispatch(actions.initLikes()),
        [dispatch]
    );;

    /* Likes Initializing from LocalStorage*/
    useEffect(() => {
        onInitLikes();
    }, [onInitLikes]);


    return <LikesList likesArray={likes} likeState={props.likeState} closeBtnHandler={props.closeBtnHandler} />
}



export default Likes;