import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import LogInForm from "./LogInForm";
import PopUp from "./PopUp";

function App() {
  const trial = () => {
    console.log("hey");
  };  
  return (
    <>
    <Button
      backgroundColor={"salmon"}
      borderColor={"red"}
      text={"hello"}
      justifyContent={"center"}
      functionToDisplay={trial}
    />
    <LogInForm placeholder={"Type your name"}/>
    {/* <PopUp h1={"Hello"} h2={"world"}/> */}
    </>
  );
}

export default App;
