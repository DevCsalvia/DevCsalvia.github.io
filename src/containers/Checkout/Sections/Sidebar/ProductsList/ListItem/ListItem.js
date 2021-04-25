import classes from './ListItem.module.css';

const ListItem = props => {
    const item = props.itemData;

    return (<li className={classes.List__item}>
        <div className={classes.List__item_img__block}>
            <span>{item.amount}</span>
            <img src={`/images/ProductsPage/img/${item.category}/${item.imgUrl.split(' ')[0]}`} alt="Product" />
        </div>
        <div className={classes.List__item_content}>
            <div className={classes.List__item_name}>
                <span>{item.name}</span>
                <span>{`${item.title} | ${item.size}`}</span>
            </div>
            <div className={classes.List__item_price}>
                ₽{(+item.price * +item.amount).toFixed(2)} RUB
        </div>
        </div>
    </li>)
};

export default ListItem;