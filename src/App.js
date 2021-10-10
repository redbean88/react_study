import React from "react";
import Hello from "./Hello";
import './App.css'
import Wrapper from "./Wrapper";

function App() {
  const test = 'name'
  return (
    <Wrapper>
      {/* 주석 */}
      <Hello isSpecial={false}/>
      <div className="App-link">{test}</div>
    </Wrapper>
  );
}

export default App;
