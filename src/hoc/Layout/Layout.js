import Aux from '../Auxil/Auxil';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const layout = props => {
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

export default layout;