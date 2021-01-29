import './App.css';

import Layout from './hoc/Layout/Layout';
import IndexPage from './containers/indexPage/IndexPage';

const app = props => {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
}

export default app;
