import { Link } from 'react-router-dom';

import classes from './ContactSection.module.css';

const ContactSection = props => {
    return (
        <section className={classes.ContactSection + ' section--hidden'} id="ContactSection">
            <div className={classes.ContactSection__Content}>
                <div className={classes.ContactSection__Content__Information}>
                    <div className={classes.ContactSection__Information_Heading}>Contact Information</div>
                    <div className={classes.ContactSection__Information_Body}>
                        <div className={classes.ContactSection__Information_Body_Item}>
                            <span>Icon</span>
                            <p>
                                Runner ApS <br />
                                Moscow Slavyanskaya square, 4 building 2
                            </p>
                        </div>
                        <div className={classes.ContactSection__Information_Body_Item}>
                            <span>Icon</span>
                            <p>
                                +7954123351
                            </p>
                        </div>
                        <div className={classes.ContactSection__Information_Body_Item}>
                            <span>Icon</span>
                            <Link to="/">
                                mail@runner.com
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.ContactSection__Content__Text}>
                    <div className={classes.ContactSection__Content__Text_Item}>
                        <h4>How Can We Help?</h4>
                        <p>Please select a topic below related to your inquiry. If <br /> you don’t find what you need, fill out our contact form.</p>
                    </div>
                    <div className={classes.ContactSection__Content__Text_Item}>
                        <h4>Book a Demo</h4>
                        <p>Request a demo from one of our conversion specialists.</p>
                    </div>
                    <div className={classes.ContactSection__Content__Text_Item}>
                        <h4>Get Inspired</h4>
                        <p>Discover the many ways in which our customers use Sleeknote.</p>
                    </div>
                    <div className={classes.ContactSection__Content__Text_Item}>
                        <h4>Become a Partner</h4>
                        <p>Join our Partner Program and earn 25% recurring commissions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;