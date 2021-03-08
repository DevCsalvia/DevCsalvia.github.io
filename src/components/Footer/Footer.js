// My css
import "./Footer.css";

// My components
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';
import InputField from './InputField/InputField';

// My icons
import { ReactComponent as TwitterSvg } from '../../assets/SVG-Icons/twitter.svg';
import { ReactComponent as FacebookSvg } from '../../assets/SVG-Icons/facebook.svg';
import { ReactComponent as VkSvg } from '../../assets/SVG-Icons/vk.svg';

const Footer = props => (
    <footer className="Site-footer">
        <div className="Site-footer__content">
            <section className="Site-footer__social">
                <div className="Site-footer__social__content">
                    <p className="Site-footer__social__message">
                        We’re working hard. Day after day. <br />
                        Sign up to stay up to date.
                    </p>
                    <form
                        action="#"
                        className="Site-footer__social__form">
                        <InputField placeholder="Email*" />
                    </form>
                    <ul className="Site-footer__social__icons">
                        <li><TwitterSvg /></li>
                        <li><FacebookSvg /></li>
                        <li><VkSvg /></li>
                    </ul>
                </div>

            </section>
            <div className="Site-footer__content-line"></div>
            <section className="Site-footer__nav">
                <nav>
                    <ul className="Site-footer__nav__menu">
                        <li className="Site-footer__nav__submenu">
                            <span className="Site-footer__nav__menu-title">Discover More</span>
                            <ul className="Site-footer__nav__menu-links">
                                <NavigationItem link="#">RUNNER Youtube</NavigationItem>
                                <NavigationItem link="#">Digital Gift Card</NavigationItem>
                                <NavigationItem link="#">Store Locations</NavigationItem>
                                <NavigationItem link="#">Upcoming Events</NavigationItem>
                            </ul>
                        </li>
                        <li className="Site-footer__nav__submenu">
                            <span className="Site-footer__nav__menu-title">Get Help</span>
                            <ul className="Site-footer__nav__menu-links">
                                <NavigationItem link="#">FAQ</NavigationItem>
                                <NavigationItem link="#">My Account</NavigationItem>
                                <NavigationItem link="#">Customer Support</NavigationItem>
                                <NavigationItem link="#">Exchanges & Returns</NavigationItem>
                                <NavigationItem link="#">Afterpay</NavigationItem>
                                <NavigationItem link="#">Accessibility</NavigationItem>
                                <NavigationItem link="#">Privacy Policy</NavigationItem>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
        <section className="Site-footer__bottom">
            <p className="Site-footer__bottom__copyright">
                Copyright 2021. All rights reserved.
            </p>
        </section>
    </footer>
);

export default Footer;