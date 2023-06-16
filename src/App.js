// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import FormPage from "./components/formPage";
import Done from './components/done';
import { pageList } from "./data";

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  const allFields = {};
  pageList.forEach(page => {
    page.pageData.fields.forEach(field => {
      allFields[field.name] = '';
    });
  });

  const [formState, setFormState] = useState(allFields);


  const handleFormChange = (inputValue) => {
    setFormState(inputValue);
  };

  const resetForm = () => {
    setFormState(allFields);
  }

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Navigate to={"/" + pageList[0].id} />} /> {/* Navigating to first page */}
          <Route path="/:pageIndex" element={<FormPage
            data={pageList}
            formState={formState}
            handleFormChange={handleFormChange}
          />} />
          <Route path="/done" element={<Done formState={formState} resetForm={resetForm} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
