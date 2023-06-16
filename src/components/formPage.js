import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from './customForm';
import { Button } from './styledComponents';
import { useParams } from "react-router-dom";

function FormPage({ data, formState, handleFormChange }) {
    const { pageIndex } = useParams();
    const filteredData = data.find(page => page.id === pageIndex);
    const pageData = filteredData.pageData;
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        const isFormValid = pageData.fields.every(field => formState[field.name]);
        if (!isFormValid) {
            setError('Please fill out the fields.');
            return;
        }
        setError(null);
        navigate('/' + filteredData.next);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CustomForm
                fields={pageData.fields}
                formData={formState}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit}
            />
            <div>
                {pageData.fields.map(field => (field.type === 'select' &&
                    <div>
                        <p>Possible Options for {field.label}:-</p>
                        <ul>
                            {field.options.map(option => (
                                <li>{option}</li>
                            ))}
                        </ul>
                        <br />
                    </div>
                ))}
                <br />
                <br />
                <Button type="button" value={pageData.buttonText} onClick={handleSubmit} />
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
        </div>
    );
}

export default FormPage;
