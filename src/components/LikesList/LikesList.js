import React from 'react';
import Aux from '../../hoc/Auxil/Auxil';

import './LikesList.css';
import Like from './Like/Like';

const LikesList = (props) => {

    let likesListMarkup = [];
    for (let i = 0; i < 5; i++) {
        likesListMarkup.push(<Like imgClass={props.likesArray[0].img}
            title={props.likesArray[0].title}
            name={props.likesArray[0].name}
            price={props.likesArray[0].price}
            key={i} />);
    }

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