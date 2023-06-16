// PageTwo.js
import React from "react";
import { Link } from "react-router-dom";

function Done({ formState, resetForm }) {
    return (
        <div>
            <h2>Generated Text</h2>
            <p>I have a {formState.make} and the colour is {formState.colour}.</p>
            {(formState.colour === "RED") && <p>THE CAR IS RED! NICE!!</p>}
            <br />
            <p>REF: {formState.code}</p>
            <br />
            <Link to="/" onClick={resetForm}>Go Back</Link>
        </div>
    );
}

export default Done;
