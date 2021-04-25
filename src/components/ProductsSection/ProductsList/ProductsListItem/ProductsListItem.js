import { Link } from 'react-router-dom';

import classes from './ProductsListItem.module.css';

// My icons
import { ReactComponent as HeartOSvg } from '../../../../assets/SVG-Icons/heart-o.svg';
import { ReactComponent as HeartSvg } from '../../../../assets/SVG-Icons/heart.svg';


const ProductsListItem = props => <li key={props.productId} className={classes.Product__grid__item}>
    <button className={classes.Product__grid__item__like_btn}
        onClick={() => props.likeBtnClicked({
            id: props.productId,
            category: props.product.category,
            imgUrl: props.product.imgUrl.split(' ')[0],
            name: props.product.name,
            price: props.product.price,
            title: props.product.title
        }, props.Liked)}>
        {props.Liked ? <HeartSvg /> : <HeartOSvg />}
    </button>
    <div className={classes.Product__grid__item__img}>
        <Link
            to={{
                pathname: `/products/${props.productId}`,
                search: `?category=${props.product.category}`
            }}>
            <img src={`../images/ProductsPage/img/${props.product.category}/${props.product.imgUrl.split(' ')[0]}`} alt="Product Img" />
        </Link>
    </div>
    <h6 className={classes.Product__grid__item__name}>{props.product.name}</h6>
    <span className={classes.Product__grid__item__price}>{props.product.price}rub</span>
</li>;

export default ProductsListItem;