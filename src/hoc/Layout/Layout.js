import Aux from '../Auxil/Auxil';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

import './Layout.css';

const Layout = props => {
    return (
        <Aux>
            <Toolbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    );
}

export default Layout;