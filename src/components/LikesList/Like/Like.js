import { NavLink } from 'react-router-dom';

import './Like.css';

const Like = (props) => (
    <li className="List__Item">
        <NavLink className="Likes__link" exact
            to="#">
            <div className={"Likes__img " + props.imgClass}></div>
            <div className={"Likes__data"}>
                <p className={"Likes__title"}>{props.title}</p>
                <h4 className={"Likes__name"}>{props.name}</h4>
                <p className={"Likes__price"}>{props.price}</p>
            </div>
        </NavLink>
    </li>
);

export default Like;