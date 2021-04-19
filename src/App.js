import { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import IndexPage from './containers/IndexPage/IndexPage';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import ProductInput from './containers/ProductInput/ProductInput';

const app = props => {
  // with component is question???
  let routes = (
    <Switch>
      <Route path={'/productinput'} component={ProductInput} />
      <Route path={'/products'} render={ProductsPage} />
      <Route path={'/'} exact component={IndexPage} />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
}

export default withRouter(app);
