import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";

const log = console.log;
const LogInForm = ({ placeholder }) => {
  let [isNameInputValid, setIsNameInputValid] = useState();
  let [passwordLength, setPasswordLength] = useState();
  let [isPasswordValid, setIsPasswordValid] = useState();
  let [users, setUsers] = useState([]);
  let userNameRef = useRef();
  let passwordRef = useRef();
  let confirmedPasswordRef = useRef();

  const userNaneChecker = () => {
    if (userNameRef.current.value.length < 3) {
      setIsNameInputValid(false);
      log(isNameInputValid, "1");
    } else if (userNameRef.current.value.length >= 3) {
      setIsNameInputValid(true);
      log(isNameInputValid, "2");
    }
  };
  const passeordChecker = () => {
    if (passwordRef.current.value.length >= 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
    if (
      passwordRef.current.value === confirmedPasswordRef.current.value &&
      passwordLength === true
    ) {
      setIsPasswordValid(true);
      console.log(isPasswordValid, "1");
    } else if (
      passwordRef.current.value !== confirmedPasswordRef.current.value
    ) {
      setIsPasswordValid(false);
      console.log(isPasswordValid, "2");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isPasswordValid && isNameInputValid) {
      const newUser = {
        userNane: userNameRef.current.value,
        password: passwordRef.current.value,
      };
      setUsers([...users, newUser]);
      console.log(users);
      userNameRef.current.value = "";
      passwordRef.current.value = "";
      confirmedPasswordRef.current.value = "";
    }
  };
  return (
    <Form>
      <InputField
        minlength="3"
        ref={userNameRef}
        placeholder={placeholder}
        onChange={() => {
          userNaneChecker();
        }}
      ></InputField>
      <InputField
        ref={passwordRef}
        placeholder={"Type your password"}
        type="password"
      ></InputField>
      <InputField
        ref={confirmedPasswordRef}
        placeholder={"Confirm your password"}
        onChange={() => {
          passeordChecker();
        }}
        type="password"
      ></InputField>
      <Button
        onClick={(e) => {
          onSubmit(e);
          log(isPasswordValid, 3);
        }}
      >
        Log In
      </Button>
      <AlertsArea>
        {isNameInputValid === false ? (
          <H2>
            <FiAlertTriangle /> User name should have min length of 3 characters
          </H2>
        ) : null}
        {passwordLength === false ? (
          <H2>
            <FiAlertTriangle /> Password should have min length of 8 characters
          </H2>
        ) : null}
        {isPasswordValid === false ? (
          <H2>
            <FiAlertTriangle /> Password and confirmed password are not the same
          </H2>
        ) : null}
      </AlertsArea>
    </Form>
  );
};
export default LogInForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
`;
const InputField = styled.input`
  outline: 0;
  border-bottom: grey solid 1.7px;
  border-top: none;
  border-right: none;
  border-left: none;
  height: 35px;
  flex-basis: 100%;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  margin: 10px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 16px;

  ::placeholder {
    color: grey;
  }
`;
const Button = styled.button`
  border: grey 2px solid;
  outline: none;
  background: none;
  padding: 8px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 8px;
  margin-top: 10px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 15px;
  cursor: pointer;
  :active {
    color: #555;
    transform: scale(0.9);
  }
  :hover {
    color: #555;
    background: rgb(26, 34, 44);
  }
`;
const AlertsArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const H2 = styled.h2`
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 15px;
  color: red;
`;
