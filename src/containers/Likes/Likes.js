

import LikesList from '../../components/LikesList/LikesList';

const Likes = (props) => {
    let likes = [{
        img: 'item_1_1_jpg',
        title: "FOOTWEAR",
        name: "SILVER WILD TRAINER (MEN'S)",
        price: "4399rub"
    }];

    (() => {
        // JSON.parse will convert string into the data structures witch were before
        const storage = JSON.parse(localStorage.getItem('likes'));

        // Restoring likes from the localStorage
        if (storage) likes = storage;
    })();

    return <LikesList likesArray={likes} />
}

export default Likes;