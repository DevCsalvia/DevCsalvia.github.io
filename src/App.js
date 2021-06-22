import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Aux from './hoc/Auxil/Auxil';
import * as actions from './store/actions/index';

// Containers
import Layout from './hoc/Layout/Layout';
import IndexPage from './containers/IndexPage/IndexPage';
import ProductInput from './containers/ProductInput/ProductInput';

// LAZY LOADING
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));

const ProductsPage = React.lazy(() => import('./containers/ProductsPage/ProductsPage'));

const Auth = React.lazy(() => import('./containers/Auth/Auth'));

const Account = React.lazy(() => import('./containers/Account/Account'));


const App = props => {
  const dispatch = useDispatch();

  // Try auto signIn
  useEffect(() => {
    dispatch(actions.authCheckState());
  }, [dispatch]);

  let routes = (
    <Switch>
      <Route path={'/auth'} render={(props) => <Auth {...props} />} />
      <Route path={'/account'} render={(props) => <Account {...props} />} />
      <Route path={'/productinput'} component={ProductInput} />
      <Route path={'/checkout'} render={(props) => <Checkout {...props} />} />
      <Route path={'/products'} render={(props) => <ProductsPage {...props} />} />
      <Route path={'/'} exact component={IndexPage} />
      <Redirect to='/' />
    </Switch>
  );

  // console.log(props.location.pathname === '/checkout');

  // REMOVING LAYOUT FOR CHECKOUT COMPONENT
  return (
    <Aux>
      {props.location.pathname === '/checkout' ? <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense> : <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>}
    </Aux>

  );
}

export default withRouter(App);
