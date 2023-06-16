import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from './customForm';
import { Button } from './styledComponents';

function FormPage({ fields, formData, handleFormChange, nextPage }) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const isFormValid = fields.every(field => formData[field.name]);
        if (!isFormValid) {
            // setError('Please fill out all fields.');
            console.log('some error')
            return;
        }
        navigate(nextPage);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CustomForm
                fields={fields}
                formData={formData}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit}
            />
            <div>
                {fields.map(field => (field.type === 'select' &&
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
                <Button type="button" value={fields[0].buttonText} onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default FormPage;
