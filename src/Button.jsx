import React from "react";
import styled from "styled-components";

const Button = ({
  backgroundColor,
  borderColor,
  justifyContent,
  text,
  functionToDisplay,
}) => {
  return (
    <MyButton
      bgColor={backgroundColor}
      brColor={borderColor}
      jc={justifyContent}
      onClick={() => {
        functionToDisplay();
      }}
    >
      {text}
    </MyButton>
  );
};
export default Button;

const MyButton = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  width: 80px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: 2px ${(props) => (props.brColor ? props.brColor : "blue")} solid;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "yellow")};
  justify-content: ${(props) => (props.jc ? props.jc : "flex-start")};
`;
