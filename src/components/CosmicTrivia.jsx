import React, { useState } from 'react';
import './CosmicTrivia.css';

const CosmicTrivia = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const triviaQuestions = [
    {
      question: "How long does light take to travel from the Sun to Earth?",
      options: ["8 minutes", "1 hour", "3 seconds", "24 hours"],
      correctAnswer: "8 minutes",
      explanation: "Light takes approximately 8 minutes to travel from the Sun to Earth."
    },
    {
      question: "What is the largest known structure in the universe?",
      options: ["The Milky Way", "The Great Wall", "The Local Group", "The Observable Universe"],
      correctAnswer: "The Great Wall",
      explanation: "The Great Wall is one of the largest known structures in the universe, spanning over 1 billion light-years."
    },
    {
      question: "What is the approximate age of the universe?",
      options: ["4.5 billion years", "13.8 billion years", "100 billion years", "1 trillion years"],
      correctAnswer: "13.8 billion years",
      explanation: "The universe is approximately 13.8 billion years old, based on measurements of the cosmic microwave background."
    },
    {
      question: "What is the name of the supermassive black hole at the center of our galaxy?",
      options: ["Sagittarius A*", "Cygnus X-1", "M87*", "Centaurus A"],
      correctAnswer: "Sagittarius A*",
      explanation: "Sagittarius A* is the supermassive black hole at the center of the Milky Way galaxy."
    },
    {
      question: "What is the main component of the Sun?",
      options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
      correctAnswer: "Hydrogen",
      explanation: "The Sun is primarily composed of hydrogen (about 74%) and helium (about 24%)."
    }
  ];
  
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(null);
  };
  
  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isAnswerCorrect = selectedAnswer === triviaQuestions[currentQuestionIndex].correctAnswer;
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestionIndex < triviaQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResults(false);
  };
  
  if (showResults) {
    return (
      <div className="cosmic-trivia">
        <h2>Quiz Results</h2>
        <div className="results-card">
          <h3>Your Score: {score} out of {triviaQuestions.length}</h3>
          <p>Percentage: {((score / triviaQuestions.length) * 100).toFixed(1)}%</p>
          <button className="reset-button" onClick={resetQuiz}>
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cosmic-trivia">
      <h2>Cosmic Trivia Quiz</h2>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentQuestionIndex + 1) / triviaQuestions.length) * 100}%` }}
        ></div>
      </div>
      <p className="question-counter">
        Question {currentQuestionIndex + 1} of {triviaQuestions.length}
      </p>
      
      <div className="question-card">
        <h3>{triviaQuestions[currentQuestionIndex].question}</h3>
        
        <div className="options">
          {triviaQuestions[currentQuestionIndex].options.map((option, index) => (
            <div 
              className={`option ${selectedAnswer === option ? 'selected' : ''}`} 
              key={index}
            >
              <label>
                <input 
                  type="radio" 
                  name="trivia" 
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelection(option)} 
                />
                {option}
              </label>
            </div>
          ))}
        </div>
        
        <div className="button-group">
          <button 
            className="submit-button" 
            onClick={submitAnswer} 
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </button>
          
          {isCorrect !== null && (
            <button 
              className="next-button" 
              onClick={nextQuestion}
            >
              {currentQuestionIndex < triviaQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
        
        {isCorrect !== null && (
          <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect 
              ? `Correct! ${triviaQuestions[currentQuestionIndex].explanation}` 
              : `Incorrect. ${triviaQuestions[currentQuestionIndex].explanation}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default CosmicTrivia;