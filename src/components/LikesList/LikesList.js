import React from 'react';

import './LikesList.css';
import Like from './Like/Like';

const LikesList = (props) => {

    let likesListMarkup = [];

    // likesListMarkup.push(<Like imgUrl={props.likesArray[0].img}
    //     title={props.likesArray[0].title}
    //     name={props.likesArray[0].name}
    //     price={props.likesArray[0].price}
    //     key={0} />);

    return (
        <div className="LikesList__Wrapper">
            <span>WISHLIST</span>
            <div className="LikesList__Close"></div>
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