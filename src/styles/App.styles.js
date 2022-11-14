import styled from "styled-components";
import questionField from "../assets/QUEST.svg";
import ansField from "../assets/ANS.svg";
import ansGoodField from "../assets/ANS_GOOD.svg";
import ansBadField from "../assets/ANS_BAD.svg";
import backgnd from "../assets/BACKGROUND.png";

export const Background = styled.div`
  background-image: url(${backgnd});
  background-repeat: no-repeat;
  opacity: 0.6;
  background-position: center;
  left:0;
  top:0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index:-100;
  `

export const Container = styled.div`
  z-index:10;
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
  margin-top: 35px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.div`
  height: 10%;
  width: 50%;
  padding: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${questionField});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  & > h4 {
    padding-left: 55px;
  }
`;

export const QuestionTitle = styled.h3`
  background: #6e0b1e;
  border: 3px solid #e8bc76;
  border-radius: 5px;
  width: max-content;
  position: absolute;
  padding: 15px;
  top: -25px;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  align-items: center;
`;

export const Answer = styled.div`
cursor: pointer;
  height: 50%;
  padding: 10px;
  width: calc(100% - 20px);
  background-color: blue;
  display: grid;
  justify-content: center;
  align-items: center;
  background: url(${ansField}) no-repeat center;
  background-size: 100% 70px;

  &.correct {
    background-image: url(${ansGoodField});
  }
  &.incorrect {
    background-image: url(${ansBadField});
  }
`;

export const NextButton = styled.button`
  background: #6e0b1e;
  color: #eee;
  cursor: pointer;
  width: 90%;
  height: 49%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  line-height: 80px;
  font-size: 20px;
  text-decoration: none;
  box-sizing: border-box;

  &.border {
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
  }

  &.ribbon-outset.border::after,
  &.ribbon-outset.border::before {
    top: -4%;
    content: "";
    height: 28px;
    width: 30px;
    position: absolute;
    background: #6e0b1e;
  }
  &.ribbon-outset.border::after {
    left: 0;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-bottom: 2px solid #eee;
    border-left: 2px solid #eee;
    transform: rotate(45deg) skew(12deg, 15deg);
  }
  &.ribbon-outset.border::before {
    right: -30px;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-top: 2px solid #eee;
    border-right: 2px solid #eee;
    transform: rotate(45deg) skew(12deg, 15deg);
  }
`;
