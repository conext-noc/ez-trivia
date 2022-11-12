import { useState, useEffect } from "react";
import { Container, NextButton, QuestionContainer } from "./styles/App";
import ReactConfetti from "react-confetti";
import data from "./assets/PREGUNTAS EXPOZULIA.json";

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [next, setNext] = useState(Math.floor(Math.random() * 39));
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentCuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize",detectSize)
    };
  }, [windowDimensions]);

  const detectSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const selectHandler = (isCorrect, e) => {
    setCurrentCuestion((currQuestion) => currQuestion + 1);
    if (isCorrect) setScore((currScore) => currScore + 1);
    e.target.className = isCorrect ? "correct" : "incorrect";
    setTimeout(() => {
      e.target.classList.remove(isCorrect ? "correct" : "incorrect");
      if (currentQuestion === 2) {
        setIsFinished(true);
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
      <h2>TRIVIA Oz. 😎</h2>
      {!isFinished ? (
        <>
          <QuestionContainer>
            <h4>{data[next]?.PREGUNTA}</h4>
            <div>
              {data[next]?.OPCIONES.map((opt) => (
                <button
                  key={opt.key}
                  onClick={(e) => selectHandler(opt.isCorrect, e)}
                >
                  <div>
                    {opt.key} {")"} {opt.value}
                  </div>
                </button>
              ))}
            </div>
          </QuestionContainer>
        </>
      ) : (
        <div>
          {score}
          {score > 2 && <ReactConfetti width={windowDimensions.width} height={windowDimensions.height} tweenDuration={1000}/>}
          <NextButton onClick={resetHandler}>Reiniciar</NextButton>
        </div>
      )}
    </Container>
  );
};

export default App;
