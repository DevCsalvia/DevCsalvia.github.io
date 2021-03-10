import { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import IndexPage from './containers/indexPage/IndexPage';
import ProductsPage from './containers/ProductsPage/ProductsPage';

const app = props => {
  let routes = (
    <Switch>
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
