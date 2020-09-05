import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";

function App() {
  const trial =()=>{console.log("hey")}
  return (
    <Button backgroundColor={"salmon"} borderColor={"red"} text={"hello"} justifyContent={"center"} functionToDisplay={trial}/>
  );
}

export default App;
