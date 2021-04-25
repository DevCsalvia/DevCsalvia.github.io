import { Link } from 'react-router-dom';

// Components
import Separator from '../../../../components/UI/CheckoutLineSeparator/Separator';
import ExpressBtns from './ExpressBtns/ExpressBtns';
import MainContent from './MainContent/MainContent';

import classes from './Main.module.css';

const Main = props => {
    return (
        <section className={classes.CheckoutMain}>
            <div className={classes.CheckoutMain__header}>
                <Link to="/">RUNNER</Link>
            </div>
            <ExpressBtns />
            <Separator addClasses={classes.CheckoutMain__separator}><span>OR</span></Separator>
            <MainContent />
            <div className={classes.CheckoutMain__footer}>
                <p>
                    All rights reserved RUNNER
                </p>
            </div>
        </section>
    );
}

export default Main;