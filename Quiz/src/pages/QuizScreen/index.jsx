import React, { useState } from 'react';

const questions = [
  {
    question: "Qual é a capital da França?",
    options: ["Berlim", "Madri", "Paris", "Lisboa"],
    answer: 2, // índice da resposta correta
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: 2,
  },
  {
    question: "Qual é a fórmula química da água?",
    options: ["CO2", "H2O", "NaCl", "O2"],
    answer: 1,
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "Jorge Amado", "Clarice Lispector", "Guimarães Rosa"],
    answer: 0,
  },
  {
    question: "Qual é a moeda do Japão?",
    options: ["Yuan", "Won", "Yen", "Dólar"],
    answer: 2,
  },
];

export default function QuizScreen({ setScreen }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [isAnswered, setIsAnswered] = useState(false); // Para controlar se a pergunta foi respondida

  const handleAnswer = (index) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = index;

    setUserAnswers(updatedAnswers);
    setIsAnswered(true); // Marca a pergunta como respondida

    if (currentQuestion < questions.length - 1) {
      // Muda para a próxima pergunta após 1 segundo
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnswered(false); // Reseta o estado após a mudança de pergunta
      }, 1000); // Aguarda 1 segundo
    } else {
      let score = updatedAnswers.reduce((acc, answer, idx) => {
        return answer === questions[idx].answer ? acc + 1 : acc;
      }, 0);
      // Chama o setScreen com a pontuação e o total de perguntas
      setScreen({ score, totalQuestions: questions.length }); // Passa a pontuação e o total
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h1>
      <div className="flex flex-col space-y-2">
        {questions[currentQuestion].options.map((option, index) => {
          const isCorrect = index === questions[currentQuestion].answer;
          const isSelected = userAnswers[currentQuestion] === index;
          const buttonClasses = `
            px-28 py-5 rounded-lg transition duration-300
            ${isAnswered && isCorrect ? 'bg-green-500 text-white' : ''}
            ${isAnswered && isSelected && !isCorrect ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}
            ${isAnswered ? 'opacity-75' : 'hover:bg-blue-700'}
          `;

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={buttonClasses}
              disabled={isAnswered} // Desativa o botão se a pergunta já foi respondida
            >
              {option}
            </button>
          );
        })}
      </div>
      {isAnswered && (
        <div className="mt-4 text-lg">
          {userAnswers[currentQuestion] === questions[currentQuestion].answer
            ? 'Resposta Correta!'
            : 'Resposta Incorreta!'}
        </div>
      )}
    </div>
  );
}
