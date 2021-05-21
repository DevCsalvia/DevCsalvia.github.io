import * as actionTypes from './actionTypes';

export const purchaseItems = (order, token, userId) => {
    return {
        type: actionTypes.PURCHASE_ITEMS,
        order: order,
        token: token,
        userId: userId
    }
}

export const purchaseItemsStart = () => {
    return {
        type: actionTypes.PURCHASE_ITEMS_START
    }
}

export const purchaseItemsSuccess = () => {
    return {
        type: actionTypes.PURCHASE_ITEMS_SUCCESS
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

// FETCH ORDERS
export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (userId, token) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        userId: userId,
        token: token
    }
}

export const fetchOrdersSuccess = (items) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        itemsArr: items
    }
}