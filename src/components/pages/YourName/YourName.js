import React, {useState} from 'react';
import "./YourName.css"
import * as PropTypes from "prop-types";
import {YourNameForm} from "./items/YourNameForm";
import {YourNameStack} from "./items/YourNameStack";

YourNameForm.propTypes = {
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func
};

function YourName() {
        const [name, setName] = useState("")

    return (
        <>
            <div className="yourName">
                <h2>Twoje imię</h2>
                <div className="yourName__container">
                    <YourNameForm name={name} setName={setName}/>
                    <YourNameStack/>
                </div>
            </div>
        </>
    );
}

export default YourName;