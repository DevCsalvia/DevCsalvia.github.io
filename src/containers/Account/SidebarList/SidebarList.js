import { useSelector } from 'react-redux';

import * as actions from '../../../store/actions/index';

import classes from './SidebarList.module.css';

const SidebarList = props => {
    const firstName = useSelector(state => state.auth.firstName);
    const email = useSelector(state => state.auth.email);

    const logoutHandler = () => {
        props.dispatch(actions.logout());
    };

    return (
        <ul className={classes.SidebarList}>
            <li>
                HELLO&nbsp;{firstName}!
                <span>{email}</span>
            </li>
            <li className={classes.active}>
                Orders
            </li>
            {/* <li>My Info</li>
            <li>Rewards</li> */}
            <li onClick={logoutHandler}>Log Out</li>
        </ul>
    );
};

export default SidebarList;