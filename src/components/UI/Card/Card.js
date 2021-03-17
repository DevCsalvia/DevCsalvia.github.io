import classes from './Card.module.css';

import Stars from '../Stars/Stars';

const Card = props => {
    return (
        <div className={classes.Card_Wrapper}>
            <div className={classes.Card_User}>
                <div className={classes.Card_User__Img}>
                    <img src={`./images/IndexPage/FeedbackSection/Users/${props.userImgUrl}`} alt="USER" />
                </div>
                {props.name}
            </div>
            <h3 className={classes.Card_Title}>
                {props.title}
            </h3>
            <div className={classes.Card_Stars}>
                <Stars amount='5' />
            </div>
            <div className={classes.Card_Text}>
                <p>
                    {props.text_content}
                </p>
            </div>
        </div>
    );
};

export default Card;