import './Accordion.css';

import parse from 'html-react-parser';

const Accordion = props => {
    console.log(props.detailsContent);
    return (
        <div className="Accodrion-Container">
            <input id="ac-1" name="accordion-1" type="checkbox" />
            <label htmlFor="ac-1">DETAILS<span>+</span></label>
            {parse(props.detailsContent)}
        </div>
    );
}

export default Accordion;