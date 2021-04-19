import { Link } from 'react-router-dom';

import './Like.css';

const Like = (props) => {
    return (
        <li className="List__Item">
            <Link className="Likes__link" to={{
                pathname: `/products/${props.productId}`,
                search: `category=${props.category}`
            }}>
                <div className="Likes__img">
                    <img src={`../images/ProductsPage/img/${props.imgUrl}`} alt="Product" />
                </div>
                <div className={"Likes__data"}>
                    <p className={"Likes__title"}>{props.title}</p>
                    <h4 className={"Likes__name"}>{props.name}</h4>
                    <p className={"Likes__price"}>{props.price} rub</p>
                </div>
            </Link>
        </li>
    )
}


export default Like;