import React from 'react';

import './LikesList.css';
import Like from './Like/Like';

const LikesList = (props) => {

    let likesListMarkup = [];

    if (props.likesArray) props.likesArray.map(item => likesListMarkup.push(<Like
        productId={item.id}
        imgUrl={item.imgUrl}
        title={item.title}
        name={item.name}
        price={item.price}
        key={item.id} />));

    return (
        <div className={`LikesList__Wrapper ${props.likeState ? 'LikesList__Wrapper--Visibility' : ''} `}>
            <div className="LikesList__Title-Wrapper">
                <span>WISHLIST</span>
                <div className="LikesList__Close" onClick={props.closeBtnHandler}></div>
            </div>
            <ul className="LikesList">
                {likesListMarkup}
                {/* <Like imgClass={'item_1_1_jpg'}
                    title="FOOTWEAR"
                    name="SILVER WILD TRAINER (MEN'S)"
                    price="4399руб" />
                <Like imgClass={'item_1_1_jpg'}
                    title="FOOTWEAR"
                    name="SILVER WILD TRAINER (MEN'S)"
                    price="4399руб" />
                <Like imgClass={'item_1_1_jpg'}
                    title="FOOTWEAR"
                    name="SILVER WILD TRAINER (MEN'S)"
                    price="4399руб" />
                <Like imgClass={'item_1_1_jpg'}
                    title="FOOTWEAR"
                    name="SILVER WILD TRAINER (MEN'S)"
                    price="4399руб" /> */}
            </ul>
        </div>
    );
};

export default LikesList;