// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterDetailPage from "./pages/CharacterDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route
          path="/character/:characterId"
          element={<CharacterDetailPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
