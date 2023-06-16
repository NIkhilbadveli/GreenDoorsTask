// PageOne.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Label, Select, Button } from './styledComponents';

function PageOne({ handleFormChange }) {
    const [make, setMake] = useState("");
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (make === "") return;
        handleFormChange((prevState) => ({ ...prevState, make }));
        history("/page-two");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Label style={{ marginRight: '40px' }}>
                    MAKE:
                    
                    <Select value={make} onChange={(e) => setMake(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="AUDI">AUDI</option>
                        <option value="BMW">BMW</option>
                        <option value="VAUXHAL">VAUXHAL</option>
                        <option value="MERCEDES">MERCEDES</option>
                        <option value="PEUGEOT">PEUGEOT</option>
                        <option value="RENAULT">RENAULT</option>
                    </Select>
                </Label>
                <div>
                    <ul>
                        <li>AUDI</li>
                        <li>BMW</li>
                        <li>VAUXHAL</li>
                        <li>MERCEDES</li>
                        <li>PEUGEOT</li>
                        <li>RENAULT</li>
                    </ul>
                    <br />
                    <br />
                    <Button type="submit" value="NEXT" />
                </div>

            </div>
        </Form>
    );
}

export default PageOne;
