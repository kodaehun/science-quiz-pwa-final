import { useState } from "react";
import "./index.css";

const quizData = [
  {
    question: "기체란 무엇일까요?",
    options: ["고정된 모양", "공기처럼 자유롭게 퍼지는 것", "돌처럼 단단한 것"],
    answer: 1,
    explanation: "기체는 공기처럼 자유롭게 퍼지고 담는 그릇에 따라 모양이 달라져요.",
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const quiz = quizData[current];

  const handleSelect = (i: number) => {
    setSelected(i);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrent((prev: number) => (prev + 1) % quizData.length);
  };

  return (
    <div className="container">
      <h2>과학 탐정 퀴즈</h2>
      <div className="card">
        <p>{quiz.question}</p>
        {quiz.options.map((opt, i) => (
          <button
            key={i}
            className={"btn " + (showAnswer ? (i === quiz.answer ? "correct" : i === selected ? "wrong" : "") : "")}
            onClick={() => handleSelect(i)}
            disabled={showAnswer}
          >
            {opt}
          </button>
        ))}
        {showAnswer && <div className="feedback">{quiz.explanation}</div>}
      </div>
      {showAnswer && <button className="next-btn" onClick={handleNext}>다음 ▶</button>}
    </div>
  );
}

export default App;