import { useState } from 'react';

import './ShoppingCartItem.css';

const ShoppingCartItem = props => {
    const [amount, setAmount] = useState(1);

    const changeAmountBtnClicked = (type) => {
        if (type === 'increase') {
            setAmount(amount + 1);
            props.changeAmountOfItemHandler(Number(props.price), type);
        }
        else if (amount > 1) {
            setAmount(amount - 1);
            props.changeAmountOfItemHandler(Number(props.price), type);
        }
    }

    return (
        <li className="ShoppingCart__Product">
            <div className="ShoppingCart__Product__Image">
                <img src={`../images/ProductsPage/img/${props.imgUrl}`} alt="Product" />
            </div>
            <div className="ShoppingCart__Product__Content">
                <a href="#" className="ShoppingCart__Product__Title">
                    {props.name}
                    <span onClick={(e) => props.removeItemBtnHandler(e, props.id)}></span>
                </a>
                <span className="ShoppingCart__Product__Description">
                    {props.title} | {props.size}
                </span>
                <div className="ShoppingCart__Product__Price-Wrapper">
                    <div className="ShoppingCart__Product__Price">₽ {props.price ? Number(props.price).toFixed(2) : ''} RUB</div>
                    <div className="ShoppingCart__Product__Amount">
                        <span onClick={() => changeAmountBtnClicked('decrease')}>
                            -
                    </span>
                        <span>
                            {amount}
                        </span>
                        <span onClick={() => changeAmountBtnClicked('increase')}>
                            +
                    </span>
                    </div>
                </div>
            </div>
        </li>);
};

export default ShoppingCartItem;