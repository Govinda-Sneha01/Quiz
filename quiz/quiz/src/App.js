import React, {useState} from 'react';
import './App.css';

export default function App() {
  const questions = [
    {
      questionText: 'which animal has Teeth in it`s stomach ?',
      answerOptions: [
        {answerText: 'Turtle', isCorrect: false},
        {answerText: 'Lobsters', isCorrect: true},
        {answerText: 'Platypus', isCorrect: false},
        {answerText: 'Tortoises', isCorrect: false},
      ],
    },
    {
     questionText: 'The Cow is the National Animal of which country ?',
     answerOptions: [
      {answerText: 'India', isCorrect: false},
      {answerText: 'Nepal', isCorrect: true},
      {answerText: 'Bhutan', isCorrect: false},
      {answerText: 'Sri Lanka', isCorrect: false},
     ], 
    },
    {
      questionText: 'Which is the Largest Land Animal ?',
      answerOptions:[
      {answerText: 'Lion', isCorrect: false},
      {answerText: 'Tiger', isCorrect: false},
      {answerText: 'Elephant', isCorrect: true},
      {answerText: 'Rhinoceros', isCorrect: false},
      ],
    },
    {
      questionText: 'Which one is the Slowest Animal Under water ?',
      answerOptions:[
        {answerText: 'Dolphin', isCorrect: false},
        {answerText: 'Tortoise', isCorrect: false},
        {answerText: 'Star Fish', isCorrect: false},
        {answerText: 'SeaHorse', isCorrect: true},
      ],
    },
    {
      questionText: 'Which animal never Stop Moving,even when they Sleep or Rest ?',
      answerOptions:[
        {answerText: 'Sharks', isCorrect: true},
        {answerText: 'Dolphin', isCorrect: false},
        {answerText: 'Star Fish', isCorrect: false},
        {answerText: 'Tortoises', isCorrect: false},
      ],
    },
  ];
  const [currentQuestions, setCurrentQuestions]= useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
      alert("this answer is correct");
      setScore(score + 1);
    }
    const nextQuestion = currentQuestions + 1;
    if(nextQuestion < questions.length){
    setCurrentQuestions(nextQuestion);
    }else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
    {showScore ? (
      <div className='score-section'>You Scored {score} out of {questions.length}</div>
     ) : (
      <>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestions + 1} </span>/{questions.length}
        </div>
        <div className='question-text'>{questions[currentQuestions].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestions].answerOptions.map((answerOption)=> ( 
           <button onClick={() =>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
      </div>
      </>
     )}
    </div>
  );
}
