// PageOne.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Label, Select, Button } from './styledComponents';

function PageTwo({ handleFormChange }) {
    const [colour, setColour] = useState("");
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (colour === "") return;
        handleFormChange((prevState) => ({ ...prevState, colour }));
        history("/page-three");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Label style={{ marginRight: '40px' }}>
                    COLOUR:
                    <Select value={colour} onChange={(e) => setColour(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="BLUE">BLUE</option>
                        <option value="RED">RED</option>
                        <option value="BLACK">BLACK</option>
                        <option value="ORANGE">ORANGE</option>
                    </Select>
                </Label>
                <div>
                    <ul>
                        <li>BLUE</li>
                        <li>RED</li>
                        <li>BLACK</li>
                        <li>ORANGE</li>
                    </ul>
                    <br />
                    <br />
                    <Button type="submit" value="NEXT" />
                </div>
            </div>
        </Form>
    );
}

export default PageTwo;
