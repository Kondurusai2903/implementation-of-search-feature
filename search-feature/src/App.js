// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (

//   );
// }

// export default App;

import React, { useState } from "react";
import SearchResults from "./components/SearchResullt";
import "./styles.css";
import SearchBar from "./components/SearchBar";
export default function App() {
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <div className="Search-bar-container">
        <SearchBar setResult={setResult} />
        <SearchResults result={result} />
      </div>
    </div>
  );
}
