import styled from "styled-components";

export const Container = styled.div`
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
`;

export const QuestionContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.div`
  margin-top: 40px;
  width: 300px;
  height: 70px;
  padding: 5px 35px;
  background: #6e0b1e;
  border-top: 2px solid #E8BC76;
  border-bottom: 2px solid #E8BC76;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &.ribbon-outset.border::after {
    content: "";
    top: 21%;
    left: -22px;
    height: 44px;
    width: 44px;
    position: absolute;
    background: #000;
    border-bottom: 2.5px solid #E8BC76;
    border-left: 2.5px solid #E8BC76;
    transform: rotate(224deg) skew(13deg, 16deg);
  }
  &.ribbon-outset.border::before {
    content: "";
    top: 23%;
    right: -22px;
    height: 43px;
    width: 43px;
    position: absolute;
    background: #6e0b1e;
    border-bottom: 2.5px solid #E8BC76;
    border-left: 2.5px solid #E8BC76;
    transform: rotate(225deg) skew(16deg, 16deg);
  }
`;

export const QuestionTitle = styled.h4`
  background: #6e0b1e;
  border: 3px solid #E8BC76;
  border-radius: 5px;
  width: max-content;
  position: absolute;
  padding: 15px;
  top: -35px;
`

export const AnswerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Answer = styled.button`
  background: #6e0b1e;
  color: #eee;
  cursor: pointer;
  width: 90%;
  height: 35%;
  min-width: 70vw;
  padding-left: 15px;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  line-height: 80px;
  font-size: 20px;
  text-decoration: none;
  box-sizing: border-box;

  &.border {
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
  }

  &.ribbon-outset.border:after,
  &.ribbon-outset.border:before {
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

  &.correct,
  &.ribbon-outset.border.correct:before,
  &.ribbon-outset.border.correct:after {
    color: white;
    background: #00aa00;
  }
  &.incorrect,
  &.ribbon-outset.border.incorrect:before,
  &.ribbon-outset.border.incorrect:after {
    color: white;
    background: #aa0000;
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
