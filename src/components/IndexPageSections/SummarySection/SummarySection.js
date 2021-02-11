// My css
import "./SummarySection.css";

// My components
import Button from '../../UI/Button/Button-Type-2/Button-Type-2';

const summarySection = props => (
    <section className="Summary_Section">
        <div className="Summary_Section__Content">
            <div className="Summary_Section__Content-Text">
                <h3 className="Summary_Section__Content__Heading">
                    All types. All sizes.
                </h3>
                <p className="Summary_Section__Content__Paragraph">
                    Guaranteed to help you find the best good <br />
                    and being satisfied while using it.
                </p>
                <Button link="#">Our Group</Button>
            </div>
            <div className="Summary_Section__Content__Img"></div>
        </div>
    </section>
);

export default summarySection;