import "./CustomerRating.css";

import Stars from '../../../../../components/UI/Stars/Stars';
/*Take stars from svg MoonWalk*/
const CustomerRating = props => (
    <div className="Rating_Wrapper">
        Customer Feedback
        <div className="Rating_Stars">
            <Stars amount='5' />
        </div>
        Based on 1346 Reviews
    </div>
);

export default CustomerRating;