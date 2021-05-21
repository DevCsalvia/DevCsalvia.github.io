import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    likes: {}
};

// JSON.stringify will convert our data into json string
const persistData = (likesData) => localStorage.setItem('likes', JSON.stringify(likesData));

const addLike = (state, action) => {
    // const updatedLikes = [...state.likes, action.like];//Adding Like Is It immutable
    const stateLikes = { ...state.likes };
    stateLikes[action.like.id] = action.like;
    const updatedState = { likes: stateLikes };
    // Persist data in localStorage
    persistData(stateLikes);

    return updateObject(state, updatedState);
};

const removeLike = (state, action) => {
    const stateLikes = { ...state.likes };
    delete stateLikes[action.id];
    const updatedState = { likes: stateLikes };

    // Persist data in localStorage
    persistData(stateLikes);

    return updateObject(state, updatedState);
}

const initLikes = (state, action) => {
    // JSON.parse will convert string into the data structures witch were before
    const storageLikesData = JSON.parse(localStorage.getItem('likes'));
    // console.log(storageLikesData);

    // Restoring likes from the localStorage
    if (storageLikesData) return (updateObject(state, { likes: storageLikesData }))
    else return state;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LIKE: return addLike(state, action);
        case actionTypes.REMOVE_LIKE: return removeLike(state, action);
        case actionTypes.INITIATE_LIKES: return initLikes(state, action);
        default: return state;
    }
};

export default reducer;