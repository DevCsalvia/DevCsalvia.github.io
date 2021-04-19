import { useState } from 'react';
import './Accordion.css';

import parse from 'html-react-parser';

const Accordion = props => {
    const [checkedStatus, setCheckedStatus] = useState(false);

    return (
        <div className="Accodrion-Container">
            <input id="ac-1" name="accordion-1" type="checkbox" onClick={() => setCheckedStatus(!checkedStatus)} />
            <label htmlFor="ac-1">DETAILS<span>{checkedStatus ? '-' : '+'}</span></label>
            {parse(props.detailsContent)}
        </div>
    );
}

export default Accordion;