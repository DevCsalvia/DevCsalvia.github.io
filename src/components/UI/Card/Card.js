import classes from './Card.module.css';

import Stars from '../Stars/Stars';

const card = props => {
    let img = '';
    switch (props.num) {
        case '1': img = classes.Card_User__Img1; break;
        case '2': img = classes.Card_User__Img2; break;
        default: img = classes.Card_User__Img3;
    }
    const imgClasses = [classes.Card_User__Img, img];
    return (
        <div className={classes.Card_Wrapper}>
            <div className={classes.Card_User + ' ' + 'Card__User'}>
                <div className={imgClasses.join(' ')}></div>
                {props.name}
            </div>
            <h3 className={classes.Card_Title + ' ' + 'Card__Title'}>
                {props.title}
            </h3>
            <div className={classes.Card_Stars}>
                <Stars amount='5' />
            </div>
            <div className={classes.Card_Text + ' ' + 'Card__Text'}>
                <p>
                    {props.text_content}
                </p>
            </div>
        </div>
    );
};

export default card;