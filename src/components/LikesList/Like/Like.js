import { Link } from 'react-router-dom';

import './Like.css';

const Like = (props) => {
    const item = props.itemData;
    return (
        <li className="List__Item">
            <Link className="Likes__link" to={{
                pathname: `/products/${item.Id}`,
                search: `category=${item.category}`
            }}>
                <div className="Likes__img">
                    <img src={`../images/ProductsPage/img/${item.category}/${item.imgUrl}`} alt="Product" />
                </div>
                <div className={"Likes__data"}>
                    <p className={"Likes__title"}>{item.title}</p>
                    <h4 className={"Likes__name"}>{item.name}</h4>
                    <p className={"Likes__price"}>{item.price} rub</p>
                </div>
            </Link>
        </li>
    )
}


export default Like;