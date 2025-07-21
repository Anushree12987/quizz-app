import { useState } from 'react';

const questions = [
  { q: "What is the capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
  { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { q: "Which language is used in React?", options: ["Java", "Python", "JavaScript"], answer: "JavaScript" },
  { q: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter"], answer: "Mars" },
  { q: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C"], answer: "100°C" },
  { q: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Hemingway", "Dickens"], answer: "Shakespeare" },
  { q: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale" },
  { q: "Which continent is Egypt in?", options: ["Asia", "Africa", "Europe"], answer: "Africa" },
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna"], answer: "Hyper Text Markup Language" },
  { q: "What year did the World War II end?", options: ["1945", "1939", "1950"], answer: "1945" },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Quiz App</h1>
      {finished ? (
        <div className="text-center">
          <p className="text-xl mb-4">You scored {score} out of {questions.length}!</p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setFinished(false);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Restart
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm mb-2 text-gray-600">
            Question {current + 1} of {questions.length}
          </p>
          <p className="text-xl mb-4">{questions[current].q}</p>
          <div className="space-y-2">
            {questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => checkAnswer(opt)}
                className="block w-full text-left p-2 border rounded hover:bg-gray-100"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
