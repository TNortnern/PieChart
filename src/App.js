import React from "react";
import Template from "./components/Template";
import Results from "./components/Results";

const App = () => {
  return (
    <div className="app d-flex justify-content-center mt-4">
      <Template />
      <Results />
    </div>
  );
};

export default App;
