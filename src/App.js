import React from "react";
import "./style.css";
import Main from'./Main.js'
import Header from'./Header.js'

export default function App() {
  const name = 'abc'
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Main name={name}/>
      <Header name={name}/>
    </div>
  );
}
