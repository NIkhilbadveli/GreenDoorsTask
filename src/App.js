// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import styled from "styled-components";
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from "./pageThree";
import Done from './done';

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

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<PageOne handleFormChange={handleFormChange} />} />
          <Route path="/page-two" element={<PageTwo formState={formState} handleFormChange={handleFormChange} />} />
          <Route path="/page-three" element={<PageThree formState={formState} handleFormChange={handleFormChange} />} />
          <Route path="/done" element={<Done formState={formState}/>}/>
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
