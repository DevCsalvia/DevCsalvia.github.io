import Aux from '../../hoc/Auxil/Auxil';

import HeaderSection from '../../components/IndexPageSections/HeaderSection/HeaderSection';
import FeedbackSection from '../../components/IndexPageSections/FeedbackSection/FeedbackSection';
import GoodsSection from '../../components/IndexPageSections/GoodsSection/GoodsSection';
import SummarySection from '../../components/IndexPageSections/SummarySection/SummarySection';

const indexPage = props => {
    return (
        <Aux>
            <HeaderSection />
            <FeedbackSection />
            <GoodsSection />
            <SummarySection />
        </Aux>
    )
}

export default indexPage;