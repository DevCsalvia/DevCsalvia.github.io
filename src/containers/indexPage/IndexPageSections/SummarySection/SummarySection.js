// My css
import "./SummarySection.css";

// My components
import Button from '../../../../components/UI/Button/Button';

const SummarySection = props => (
    <section className="Summary_Section section--hidden">
        <div className="Summary_Section__Content">
            <div className="Summary_Section__Content-Text">
                <h3 className="Summary_Section__Content__Heading">
                    All types. All sizes.
                </h3>
                <p className="Summary_Section__Content__Paragraph">
                    Guaranteed to help you find the best good <br />
                    and being satisfied while using it.
                </p>
                <Button addClass="Button--Border-Black" link="#">Our Group</Button>
            </div>
            <div className="Summary_Section__Content__Img">
                <img className="lazy-img"
                    src="./images/IndexPage/SummarySection/3x/Image-1.jpg"
                    data-src="./images/IndexPage/SummarySection/1x/Image-1.jpg"
                    alt="Group" />
            </div>
        </div>
    </section>
);

export default SummarySection;