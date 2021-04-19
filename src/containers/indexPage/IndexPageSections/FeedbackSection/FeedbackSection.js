import "./FeedbackSection.css";

/*My components*/
import CustomerRating from './CustomerRating/CustomerRating';
import Card from '../../../../components/UI/Card/Card';

const FeedbackSection = props => (
    <section className="Feedback_Section section--hidden">
        <div className="Feedback_Section__Content">
            <CustomerRating />
            <h2 className="Feedback_Section__Title">The best Orthopedic Sneakers <br /> High-Quality Fabrics</h2>
            <p className="Feedback_Section__UnderHead">
                Our Runner™ costumes and sneakers combine comfort and style,<br />
            so you don’t have to go anywhere else to find best quality.
            </p>
            <div className="Feedback_Section__Cards">
                <Card
                    userImgUrl="./images/IndexPage/FeedbackSection/Users/3x/user_1.jpg"
                    name="Brittany B."
                    title="My Daughter loves her sneakers!"
                    text_content=" My 9 year old Sarah is very happy to wear such
                a suitable and the most important convenient sneakers.
                For us buying new shoes for our daugher is very difficult
                but here we can find everything we need."/>
                <Card
                    userImgUrl="./images/IndexPage/FeedbackSection/Users/3x/user_2.jpg"
                    name="Shirley T."
                    title="Husband loves his t-shirt"
                    text_content=" My 9 year old Sarah is very happy to wear such
                a suitable and the most important convenient sneakers.
                For us buying new shoes for our daugher is very difficult
                but here we can find everything we need."/>
                <Card
                    userImgUrl="./images/IndexPage/FeedbackSection/Users/3x/user_3.jpg"
                    name="Michael C."
                    title="My new sneakers look very cool"
                    text_content=" My 9 year old Sarah is very happy to wear such
                a suitable and the most important convenient sneakers.
                For us buying new shoes for our daugher is very difficult
                but here we can find everything we need."/>
            </div>
            <div className="Feedback_Section__Img">
                <img src="./images/IndexPage/FeedbackSection/Company-1.png" alt="Company" />
                <img src="./images/IndexPage/FeedbackSection/Company-2.png" alt="Company" />
                <img src="./images/IndexPage/FeedbackSection/Company-3.png" alt="Company" />
                <img src="./images/IndexPage/FeedbackSection/Company-4.png" alt="Company" />
            </div>
        </div>
    </section>
);

export default FeedbackSection;