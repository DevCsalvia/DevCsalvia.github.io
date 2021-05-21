import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Aux from '../../../../hoc/Auxil/Auxil';

import classes from './OrdersList.module.css';

// UI components
import Loader from '../../../../components/UI/Loader/Loader';

import OrdersListItem from './OrdersListItem/OrdersListItem';

const OrdersList = props => {
    const dispatch = useDispatch();

    // Take orders Data from Redux
    const itemsArr = useSelector(state => state.order.itemsArr);
    const userId = useSelector(state => state.auth.userId);
    const token = useSelector(state => state.auth.token);
    const loading = useSelector(state => state.order.loading);

    const onInitItemsData = useCallback(() => {
        dispatch(actions.fetchOrders(userId, token));
    }, [dispatch, userId, token])

    useEffect(() => {
        onInitItemsData();
    }, [onInitItemsData]);

    let markUp = <ul className={classes.OrdersList}>
        <li className={classes.OrdersList__Heading}>
            Orders
    </li>
        {itemsArr.map((item, index) => <OrdersListItem
            key={index}
            id={item.id}
            category={item.category}
            name={item.name}
            size={item.size}
            amount={item.amount}
            price={item.price}
            imgUrl={item.imgUrl.split(' ')[0]}
        />)}
        {itemsArr.length !== 0 ? '' : <li className={classes.OrdersList_EmptyTitle}>No Orders Yet</li>}
    </ul>;

    if (loading) {
        markUp = <Loader />
    }

    return (
        <Aux>
            {markUp}
        </Aux>
    );
};

export default OrdersList;