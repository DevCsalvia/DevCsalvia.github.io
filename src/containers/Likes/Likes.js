import { useState } from 'react';

import LikesList from '../../components/LikesList/LikesList';

const Likes = (props) => {

    const [likes, setLikeArray] = useState([]);

    const addLike = (id, title, name, img, price) => {
        const like = { id, title, name, img, price };
        setLikeArray(oldArray => [...likes, like]);

        // Persist the data in localStorage
        // persistData();

        return like;
    }

    // const deleteLike = (id) => {
    //     const index = likes.findIndex(el => el.id === id);
    //     likes.splice(index, 1);

    //     // Persist data in localStorage
    //     persistData();
    // }

    const isLiked = (id) => {
        return likes.findIndex(el => el.id === id) !== -1;
    }

    // const getNumLikes = () => {
    //     return likes.length;
    // }

    // const persistData = () => {
    //     // JSON.stringify will convert our array into string;
    //     localStorage.setItem('likes', JSON.stringify(likes))
    // }

    // const readStorage = () => {
    //     // JSON.parse will convert string into the data structures witch were before
    //     const storage = JSON.parse(localStorage.getItem('likes'));

    //     // Restoring likes from the localStorage
    //     if (storage) likes = storage;
    // }

    return <LikesList likesArray={likes} />
}

export default Likes;