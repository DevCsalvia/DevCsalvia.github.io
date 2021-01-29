import Aux from '../../hoc/Auxil/Auxil';

import HeaderSection from '../../components/IndexPageSections/HeaderSection/HeaderSection';
import FeedbackSection from '../../components/IndexPageSections/FeedbackSection/FeedbackSection';

const indexPage = props => {
    return (
        <Aux>
            <HeaderSection />
            <FeedbackSection />
        </Aux>
    )
}

export default indexPage;