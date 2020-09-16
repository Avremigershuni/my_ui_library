import React, { useState } from "react";
import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

const PopUp = ({ h1, h2 }) => {
  let [popUpOpen, closePopUp] = useState(true);
  return (
    <Wrapper onClick={(e)=>{closePopUp(false); e.stopPropagation();
    }}>
      {popUpOpen ? (
        <PopUpWindow>
          <Top>
            <IconBox onClick={() => {
        closePopUp(false);
      }}>
              <IoIosCloseCircleOutline />
            </IconBox>
          </Top>
          <H1>{h1}</H1>
          <H2>{h2}</H2>
        </PopUpWindow>
      ) : null}
    </Wrapper>
  );
};
export default PopUp;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  z-index: 999;
`;
const PopUpWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 400px;
  background-color: pink;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  width: 100%;
  border: 1px black solid;
  justify-content: flex-end;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;
const H1 = styled.h1``;
const H2 = styled.h2``;
