import { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Aux from './hoc/Auxil/Auxil';

// Containers
import Layout from './hoc/Layout/Layout';
import IndexPage from './containers/IndexPage/IndexPage';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import Checkout from './containers/Checkout/Checkout';
import ProductInput from './containers/ProductInput/ProductInput';
import Auth from './containers/Auth/Auth';

const app = props => {
  // with component is question???
  let routes = (
    <Switch>
      <Route path={'/auth'} component={Auth} />
      <Route path={'/productinput'} component={ProductInput} />
      <Route path={'/checkout'} component={Checkout} />
      <Route path={'/products'} render={ProductsPage} />
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

export default withRouter(app);
