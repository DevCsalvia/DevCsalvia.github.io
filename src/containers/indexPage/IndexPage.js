import Aux from '../../hoc/Auxil/Auxil';

import HeaderSection from './IndexPageSections/HeaderSection/HeaderSection';
import FeedbackSection from './IndexPageSections/FeedbackSection/FeedbackSection';
import GoodsSection from './IndexPageSections/GoodsSection/GoodsSection';
import SummarySection from './IndexPageSections/SummarySection/SummarySection';

import './IndexPage.css';

const indexPage = props => {
    return (
        <Aux>
            <HeaderSection />
            <FeedbackSection />
            <GoodsSection />
            <SummarySection />
        </Aux>
    );
};

export default indexPage;