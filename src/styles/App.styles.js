import styled from "styled-components";
import ansField from "../assets/ANS.svg";
import ansGoodField from "../assets/ANS_GOOD.svg";
import ansBadField from "../assets/ANS_BAD.svg";
import backgnd from "../assets/BACKGROUND.png";
import resetBtn from "../assets/RESET.svg"

export const Background = styled.div`
  background-image: url(${backgnd});
  background-repeat: no-repeat;
  opacity: 0.6;
  background-position: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -100;
`;

export const Container = styled.div`
  z-index: 10;
  margin: 0;
  padding: 15px;
  color: #eee;
  background-color: #282c34;
  background-color: #000;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const QuestionContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.div`
  height: 10%;
  width: clamp(15%, 50vw,550px);
  padding: 15px;
  border: 2px solid #eee;
  border-radius: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom: 5px;

  @media (max-width: 400px){
    width: 65vw;
  }
`;

export const AnswerContainer = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  align-items: center;
gap: 15px;
`;

export const Answer = styled.div`
  cursor: pointer;
  border: none;
  height: 60%;
  padding: 10px;
  width: calc(100% - 20px);
  display: grid;
  justify-content: center;
  align-items: center;
  background: url(${ansField}) no-repeat center;
  background-size: 60% 100%;

  &.correct {
    background-image: url(${ansGoodField});
  }
  &.incorrect {
    background-image: url(${ansBadField});
  }
  @media (max-width: 400px){
    background-size: 120% 100%;
  }
`;

export const NextButton = styled.button`
  cursor: pointer;
  margin: 15px;
  height: 50%;
  padding: 10px;
  border: none;
  width: calc(100% - 20px);
  color: #eee;
  display: grid;
  justify-content: center;
  align-items: center;
  background: url(${resetBtn}) no-repeat center;
  background-size: 60% 100%;
`;

export const ResultContainer = styled.div`
  padding: 25px;
  display:grid;
  gap: 25px;
  justify-content:center;
`
