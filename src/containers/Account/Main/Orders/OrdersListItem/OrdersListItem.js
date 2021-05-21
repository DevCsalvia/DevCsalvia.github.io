import { Link } from 'react-router-dom';

import classes from './OrdersListItem.module.css';

const OrdersListItem = props => {
    return (
        <li className={classes.Item}>
            <div className={classes.Item__Img}>
                <Link to={`/products/${props.id}?category=${props.category}`}>
                    <img src={`/images/ProductsPage/img/${props.category}/${props.imgUrl}`} alt="ITEM" />
                </Link>
            </div>
            <ul className={classes.Item__List}>
                <li>
                    {props.category}
                </li>
                <li className={classes.Item__List_Name}>
                    {props.name}
                </li>
                <li>
                    Size&nbsp;<span>{props.size}</span> /
                    Amount&nbsp;<span>{props.amount}</span>
                </li>
                <li>
                    <div>
                        <span>
                            Price
                        </span> &nbsp;₽ {props.price} Rub
                    </div>
                    <div>
                        <span>
                            Total Price
                        </span> &nbsp;₽ {+props.price * +props.amount} Rub
                    </div>
                </li>
            </ul>
        </li>
    );
};

export default OrdersListItem;