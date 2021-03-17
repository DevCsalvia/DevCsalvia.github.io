import * as actionTypes from './actionTypes';

export const addLike = (like, id) => {
    return {
        type: actionTypes.ADD_LIKE,
        like: like,
        id: id
    };
}

export const removeLike = (id) => {
    return {
        type: actionTypes.REMOVE_LIKE,
        id: id
    };
}

export const initLikes = () => {
    return {
        type: actionTypes.INITIATE_LIKES
    }
}