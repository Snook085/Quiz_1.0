import React from 'react';

export default function ScoreScreen({ score, totalQuestions, setScreen }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1
        className="font-bold mb-4 text-center"
        style={{
          fontSize: 'clamp(2rem, 4vw, 5rem)', // O título será responsivo, aumentando ou diminuindo conforme a tela
        }}
      >
        Pontuação
      </h1>
      <p
        className="mb-2 text-center"
        style={{
          fontSize: 'clamp(1rem, 2vw, 2.5rem)', // O texto se ajustará conforme o tamanho da tela
        }}
      >
        Você acertou {score} de {totalQuestions} perguntas!
      </p>
      <div className="mt-6">
        <button
          onClick={() => setScreen(5)} // Muda para a tela de apresentação ou reinicia o quiz
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 2rem)', // O botão também será responsivo
          }}
        >
          Ir para Roleta
        </button>
      </div>
    </div>
  );
}
