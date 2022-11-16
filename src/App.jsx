import { useState, useEffect } from "react";
import {
  Answer,
  AnswerContainer,
  Background,
  Container,
  NextButton,
  Question,
  QuestionContainer,
  ResultContainer,
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

  const [next, setNext] = useState(Math.floor(Math.random() * data.length));
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
        setNext((curr) => Math.floor(Math.random() * data.length) !== curr ? Math.floor(Math.random() * data.length) : curr + 1);
      } else {
        setNext((curr) => Math.floor(Math.random() * data.length) !== curr ? Math.floor(Math.random() * data.length) : curr + 1);
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
        <ResultContainer>
          <h3>TU PUNTUACIÓN HA SIDO {score}</h3>
          <p>{score >= 2 && isFinished ? (score === 3 ? "Jugador Estrella, Reclama tu premio!" : "Casi perfecto reclama tu premio o inténtalo de nuevo!!") : "No es tu día de suerte, Inténtalo de nuevo"}</p>
          <ReactConfetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            run={score >= 2 && isFinished}
            tweenDuration={1000}
          />
          <NextButton className="ribbon-outset border" onClick={resetHandler}>Reiniciar</NextButton>
        </ResultContainer>
      )}
      <footer>
        <img src={footerImg} alt="footer"  width="150px"/>
      </footer>
    </Container>
  );
};

export default App;
