import React from "react";
import Template from "./components/template/Template";
import Results from "./components/results/Results";

const App = () => {
  return (
    <div className="app d-flex justify-content-center mt-4">
      <Template />
      <Results />
    </div>
  );
};

export default App;
