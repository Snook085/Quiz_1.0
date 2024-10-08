import React from 'react';

export default function ScoreScreen({ score, totalQuestions, setScreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Pontuação</h1>
      <p className="text-xl mb-2">Você acertou {score} de {totalQuestions} perguntas!</p>
      <div className="mt-6">
        <button
          onClick={() => setScreen(5)} // Muda para a tela de apresentação ou reinicia o quiz
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Ir para Roleta
        </button>
      </div>
    </div>
  );
}
