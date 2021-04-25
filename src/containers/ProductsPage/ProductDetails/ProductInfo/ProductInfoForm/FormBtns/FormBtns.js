import { useSelector } from 'react-redux';
import { isLiked } from '../../../../../../shared/LikesFunctionality';
import * as actions from '../../../../../../store/actions/index';

import Button from '../../../../../../components/UI/Button/Button';

import classes from './FormBtns.module.css';

// SVG
import { ReactComponent as HeartOSvg } from '../../../../../../assets/SVG-Icons/heart-o.svg';
import { ReactComponent as HeartSvg } from '../../../../../../assets/SVG-Icons/heart.svg';


const FormBtns = props => {
    const product = props.productData;
    /*//////////////////////////////////////////////////////////////////////////////////////////// */
    /* Redux Store Access */
    const likes = useSelector(state => state.like.likes); // Likes Data
    const likedVar = isLiked(props.productId, likes);
    /* Like Btn Handler */
    const likeBtnClickedHandler = (like, liked) => liked ? props.dispatch(actions.removeLike(like.id)) : props.dispatch(actions.addLike(like));


    return (<div className={classes.ProductDetails__Content__ProductProps__ButtonsWrapper}>
        <Button disabled={props.productSize ? false : true} addClass="Button--Black">ADD TO CART</Button>
        <div className={classes.ProductDetails__Content__ProductProps__Heart_Btn}
            onClick={() => likeBtnClickedHandler({
                id: props.productId,
                category: product.category,
                imgUrl: product.imgUrl.split(' ')[0],
                name: product.name,
                price: product.price,
                title: product.title
            }, likedVar)}>{likedVar ? <HeartSvg /> : <HeartOSvg />}</div>
    </div>);
};

export default FormBtns;