import { useState, useEffect } from "react";
import {
  Answer,
  AnswerContainer,
  Background,
  Container,
  NextButton,
  Question,
  QuestionContainer,
  QuestionTitle,
} from "./styles/App.styles.js";
import ReactConfetti from "react-confetti";
import data from "./assets/PREGUNTAS EXPOZULIA.json";
import headerImg from "./assets/HEADER_IMG.png"
import footerImg from "./assets/FOOTER_IMG.png"

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [next, setNext] = useState(Math.floor(Math.random() * 39));
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentCuestion] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [styledAns, setStyledAns] = useState("");

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimensions]);

  const detectSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const selectHandler = (ans, e) => {
    setSelectedAns(ans);
    setCurrentCuestion((currQuestion) => currQuestion + 1);
    if (ans.isCorrect) setScore((currScore) => currScore + 1);
    setStyledAns(ans.isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      setStyledAns("");
      if (currentQuestion === 2) {
        setIsFinished(true);
        setNext(Math.floor(Math.random() * 39));
      } else {
        if (Math.floor(Math.random() * 39 === next)) setNext(next + 1);
        setNext(Math.floor(Math.random() * 39));
      }
    }, 1500);
  };

  const resetHandler = () => {
    setIsFinished(false);
    setCurrentCuestion(0);
    setScore(0);
  };

  return (
    <Container>
      <Background />
      <img alt="header" src={headerImg} width="300px"/>
      {!isFinished ? (
        <>
          <QuestionContainer>
            <Question>
              <QuestionTitle>PREGUNTA OZ:</QuestionTitle>
              <h4>{data[next]?.PREGUNTA}</h4>
            </Question>
            <AnswerContainer>
              {data[next]?.OPCIONES.map((opt) => (
                <Answer
                  key={opt.key}
                  onClick={(e) => selectHandler(opt, e)}
                  className={`${opt.key === selectedAns?.key && styledAns}`}
                >
                  {opt.key}- {opt.value}
                </Answer>
              ))}
            </AnswerContainer>
          </QuestionContainer>
        </>
      ) : (
        <div>
          {score >= 2 && isFinished ? "GANASTE! 😄 🎉" : "INTENTA DE NUEVO 😕"}
          <ReactConfetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            run={score >= 2 && isFinished}
            tweenDuration={1000}
          />
          <NextButton className="ribbon-outset border" onClick={resetHandler}>Reiniciar</NextButton>
        </div>
      )}
      <footer>
        <img src={footerImg} alt="footer"  width="150px"/>
      </footer>
    </Container>
  );
};

export default App;
