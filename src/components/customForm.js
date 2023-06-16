import React from 'react';
import { Form, Label, Select, } from './styledComponents';

function CustomForm({ fields, formData, handleFormChange }) {
    return (
        <Form>
            {fields.map(field => (
                <Label key={field.name}>
                    {field.label}
                    <br />
                    {field.type === 'select' ? (
                        <Select 
                            value={formData[field.name]} 
                            onChange={e => handleFormChange({ ...formData, [field.name]: e.target.value })}
                        >
                            <option value="">--Please choose an option--</option>
                            {field.options.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Select>
                    ) : (
                        <input 
                            type={field.type} 
                            value={formData[field.name]} 
                            onChange={e => handleFormChange({ ...formData, [field.name]: e.target.value })}
                        />
                    )}
                    <br />
                    <br />
                </Label>
            ))}
        </Form>
    );
}

export default CustomForm;
