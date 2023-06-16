// PageOne.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Label, Input, Button } from './styledComponents';

function PageThree({ handleFormChange }) {
    const [code, setCode] = useState("");
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (code === "") return;
        handleFormChange((prevState) => ({ ...prevState, code }));
        history("/done");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                CODE:
                <br />
                <Input type="number" value={code} onChange={(e) => setCode(e.target.value.toString())} />
            </Label>
            <br />
            <br />
            <Button type="submit" value="DONE" />
        </Form>
    );
}

export default PageThree;
