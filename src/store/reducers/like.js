import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    likes: []
};

// JSON.stringify will convert our data into json string
const persistData = (likesArray) => localStorage.setItem('likes', JSON.stringify(likesArray));

const addLike = (state, action) => {
    const updatedLikes = [...state.likes, action.like];//Adding Like Is It immutable
    const updatedState = { likes: updatedLikes, };

    // Persist data in localStorage
    persistData(updatedLikes);

    return updateObject(state, updatedState);
};

const removeLike = (state, action) => {
    const index = state.likes.findIndex(el => el.id === action.id);
    const updatedLikes = [
        ...state.likes.slice(0, index), /* Slice from begin to an element with index(not included) */
        ...state.likes.slice(index + 1) /* Slice from index of an element + 1 till the end */
    ];
    const updatedState = { likes: updatedLikes };

    // Persist data in localStorage
    persistData(updatedLikes);

    return updateObject(state, updatedState);
}

const initLikes = (state, action) => {
    // JSON.parse will convert string into the data structures witch were before
    const storageLikesArray = JSON.parse(localStorage.getItem('likes'));
    // console.log(storageLikesArray);

    // Restoring likes from the localStorage
    if (storageLikesArray) return (updateObject(state, { likes: storageLikesArray }))
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