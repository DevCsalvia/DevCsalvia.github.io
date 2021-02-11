import "./FeedbackSection.css";

/*My components*/
import CustomerRating from './CustomerRating/CustomerRating';
import Card from '../../UI/Card/Card';

/*My images*/
import Company_1 from '../../../assets/images/FeedbackSection/Company-1.png';
import Company_2 from '../../../assets/images/FeedbackSection/Company-2.png';
import Company_3 from '../../../assets/images/FeedbackSection/Company-3.png';
import Company_4 from '../../../assets/images/FeedbackSection/Company-4.png';

const feedbackSection = props => (
    <section className="Feedback_Section">
        <div className="Feedback_Section__Content">
            <CustomerRating />
            <h2 className="Feedback_Section__Title">The best Orthopedic Sneakers <br /> High-Quality Overalls</h2>
            <p className="Feedback_Section__Text-box">
                Our Runner™ costumes and sneakers combine comfort and style,<br />
            so you don’t have to go anywhere else to find best quality.
            </p>
            <div className="Feedback_Section__Cards">
                <Card
                    num="1"
                    name="Brittany B."
                    title="My Daughter loves her sneakers!"
                    text_content=" My 9 year old Sarah is very happy to wear such
                a suitable and the most important convenient sneakers.
                For us buying new shoes for our daugher is very difficult
                but here we can find everything we need."/>
                <Card
                    num="2"
                    name="Shirley T."
                    title="Husband loves his overall"
                    text_content=" My 9 year old Sarah is very happy to wear such
                a suitable and the most important convenient sneakers.
                For us buying new shoes for our daugher is very difficult
                but here we can find everything we need."/>
                <Card
                    num="3"
                    name="Michael C."
                    title="My new sneakers look very cool"
                    text_content=" My 9 year old Sarah is very happy to wear such
                a suitable and the most important convenient sneakers.
                For us buying new shoes for our daugher is very difficult
                but here we can find everything we need."/>
            </div>
            <div className="Feedback_Section__Img">
                <img src={Company_1} alt="Company" />
                <img src={Company_2} alt="Company" />
                <img src={Company_3} alt="Company" />
                <img src={Company_4} alt="Company" />
            </div>
        </div>
    </section>
);

export default feedbackSection;