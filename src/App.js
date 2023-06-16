// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import FormPage from "./components/formPage";
import Done from './components/done';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  const [formState, setFormState] = useState({
    make: "",
    colour: "",
    code: "",
  });

  const handleFormChange = (inputValue) => {
    setFormState(inputValue);
  };

  const makeFields = [
    {
      name: 'make',
      label: 'MAKE',
      type: 'select',
      options: ['AUDI', 'BMW', 'VAUXHAL', 'MERCEDES', 'PEUGEOT', 'RENAULT'],
      buttonText: 'NEXT'
    },
  ];

  const colourFields = [
    {
      name: 'colour',
      label: 'COLOUR',
      type: 'select',
      options: ['BLUE', 'RED', 'BLACK', 'ORANGE'],
      buttonText: 'NEXT'
    },
  ];

  const codeFields = [
    {
      name: 'code',
      label: 'CODE',
      type: 'text',
      buttonText: 'SUBMIT'
    },
  ];

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<FormPage
            fields={makeFields}
            formData={formState}
            handleFormChange={handleFormChange}
            nextPage="/page-two"
          />} />
          <Route path="/page-two" element={<FormPage
            fields={colourFields}
            formData={formState}
            handleFormChange={handleFormChange}
            nextPage="/page-three"
          />} />
          <Route path="/page-three" element={<FormPage
            fields={codeFields}
            formData={formState}
            handleFormChange={handleFormChange}
            nextPage="/done"
          />} />
          <Route path="/done" element={<Done formState={formState} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
