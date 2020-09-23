import React from "react";
import styled from "styled-components";

const Button = ({
  backgroundColor,
  borderColor,
  justifyContent,
  text,
  functionToDisplay,
  shadow,
}) => {
  return (
    <MyButton
      bgColor={backgroundColor}
      brColor={borderColor}
      jc={justifyContent}
      boxShadow={shadow}
      onClick={() => {
        functionToDisplay();
      }}
    >
      {text}
    </MyButton>
  );
};
export default Button;

const MyButton = styled.button`
margin:150px;
  display: flex;
  flex-direction: row;
  height: 45px;
  outline: none;
  align-items: center;
  border-radius: 6px;
  padding-right:20px;
  padding-left:20px;
  cursor: pointer;
  font-family: "Comic Sans MS", cursive, sans-serif;
   box-shadow: ${(props) => 
    props.boxShadow ? props.boxShadow : "3px 3px royalblue"}; 
  border: 2px ${(props) => (props.brColor ? props.brColor : "blue")} solid;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#1976d2")};
  justify-content: ${(props) => (props.jc ? props.jc : "flex-start")};
  :active {
    transform: scale(0.9);
  }
  
`;
