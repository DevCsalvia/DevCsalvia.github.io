import classes from './ImgsBlock.module.css';

const ImgsBlock = props => <div className={classes.ProductDetails__Content__imgs_block}>
    <div className={classes.ProductDetails__Content__img}>
        <img src={`../../images/ProductsPage/img/${props.category}/${props.imgUrl.split(' ')[0]}`} alt="Product" />
    </div>
    <div className={classes.ProductDetails__Content__img}>
        <img src={`../../images/ProductsPage/img/${props.category}/${props.imgUrl.split(' ')[1]}`} alt="Product" />
    </div>
</div>;

export default ImgsBlock;