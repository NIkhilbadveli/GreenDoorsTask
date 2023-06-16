// styledComponents.js
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
