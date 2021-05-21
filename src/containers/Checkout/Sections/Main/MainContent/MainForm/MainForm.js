import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom';
import * as actions from '../../../../../../store/actions/index';
import { FieldCreateFunction } from '../../../../../../shared/FieldCreateFunction';

import classes from './MainForm.module.css';

// UI Components
import Button from '../../../../../../components/UI/Button/Button';

// SVG
import { ReactComponent as LeftAngle } from '../../../../../../assets/SVG-Icons/angle-left.svg';

import MainFormList from './MainFormList/MainFormList';

const MainForm = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const purchased = useSelector(state => state.order.purchased);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const checkoutGoods = useSelector(state => state.cart.cartData);
    const userId = useSelector(state => state.auth.userId);
    const token = useSelector(state => state.auth.token);
    const firstName = useSelector(state => state.auth.firstName);
    const lastName = useSelector(state => state.auth.lastName);

    // Checkout init
    useEffect(() => {
        dispatch(actions.purchaseInit());
    }, [dispatch]);

    // fields data
    const [orderForm, setOrderForm] = useState({
        firstName: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'First name'
            },
            validation: {
                required: true,
            },
            value: firstName
        }),
        lastName: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Second name'
            },
            validation: {
                required: true,
            },
            value: lastName
        }),
        company: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Company (optional)'
            },
            validation: {
                required: true,
            }
        }),
        address: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Address'
            },
            validation: {
                required: true,
            }
        }),
        appartment: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Appartment, suite, etc. (optional)'
            },
            validation: {
                required: true,
            }
        }),
        city: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'City'
            },
            validation: {
                required: true,
            }
        }),
        country: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            validation: {
                required: true,
            }
        }),
        region: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Region'
            },
            validation: {
                required: true,
            }
        }),
        zipCode: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            validation: {
                required: true,
                minLength: 5,
                maxLength: 6
            }
        }),
        phone: FieldCreateFunction({
            eltype: 'input',
            elConfig: {
                type: 'text',
                placeholder: 'Phone'
            },
            validation: {
                required: true,
                minLength: 6,
                maxLength: 15
            }
        })
    });

    // Order submission
    const orderSubmitHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        };

        const goodsData = Object.keys(checkoutGoods).map(key => {
            const goodObject = {};
            goodObject.name = checkoutGoods[key].name;
            goodObject.category = checkoutGoods[key].category;
            goodObject.size = checkoutGoods[key].size;
            goodObject.price = checkoutGoods[key].price;
            goodObject.amount = checkoutGoods[key].amount;
            goodObject.imgUrl = checkoutGoods[key].imgUrl;
            goodObject.id = checkoutGoods[key].id;
            return (goodObject);
        });

        const order = {
            price: totalPrice + ' RUB',
            orderData: formData,
            goods: goodsData,
            userId: userId
        };

        dispatch(actions.purchaseItems(order, token, userId));
    };

    return (
        <form onSubmit={(e) => orderSubmitHandler(e)} className={classes.CheckoutMain__shippingAddress_form}>
            {purchased ? <Redirect to="/account" /> : ''}
            <MainFormList
                orderForm={orderForm}
                setOrderForm={setOrderForm}
            />
            <div className={classes.CheckoutMain__shippingAddress_form__btns_wrapper}>
                <span onClick={() => history.goBack()}><LeftAngle />Go Back</span>
                <Button addClass="Button--Black"><span style={{ textTransform: 'capitalize' }}>Make order</span></Button>
            </div>
        </form>
    );
};

export default MainForm;