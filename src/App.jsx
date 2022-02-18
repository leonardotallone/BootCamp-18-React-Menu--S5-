import React from "react";
import Header from "./components/Header";
import { foods, drinks } from "./components/List";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h3>Drinks</h3>
        <ul>{drinks}</ul>
        <h3>Food</h3>
        <ul>{foods}</ul>
      </main>
    </div>
  );
};

export default App;
