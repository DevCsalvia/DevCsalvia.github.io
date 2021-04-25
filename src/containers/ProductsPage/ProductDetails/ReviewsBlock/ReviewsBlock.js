import classes from './Reviews.module.css';

// UI components
import Stars from '../../../../components/UI/Stars/Stars';
import Button from '../../../../components/UI/Button/Button';

const ReviewsBlock = props => <div className={classes.ProductDetails__Content__Reviews}>
    <div className={classes.ProductDetails__Content__Reviews__TextBlock}>
        <span>BASED ON 5843 REVIEWS</span>
        <div>
            <Stars amount='5' /> <span>4.8</span>
        </div>
    </div>

    <Button addClass="Button--Black">WRITE A COMMENT</Button>
</div>;

export default ReviewsBlock;