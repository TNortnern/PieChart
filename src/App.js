import React from "react";
import Template from "./components/template/Template";
import Results from "./components/results/Results";

const App = () => {
  return (
    <>
      <div class="container">
        <div class="jumbotron jumbotron-fluid text-center">
          <h1 class="display-4">Product Chart App</h1>
        </div>
      </div>
      <div className="app d-flex justify-content-center mt-4">
        <Template />
        <Results />
      </div>
    </>
  );
};

export default App;
