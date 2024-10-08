export default function InstructionsScreen({ setScreen }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white px-4">
        <h1
          className="font-bold mb-6 text-center"
          style={{
            fontSize: 'clamp(2rem, 4vw, 5rem)', // Responsividade para títulos maiores em telas grandes
          }}
        >
          Instruções do Jogo
        </h1>
        <div
          className="leading-relaxed max-w-2xl text-center"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 2rem)', // Responsividade para o texto de instrução
          }}
        >
          <p className="mb-4">
            Bem-vindo ao nosso jogo interativo! Aqui você terá a chance de aprender e testar seus conhecimentos em um quiz divertido.
          </p>
          <p className="mb-4">
            O jogo é simples: você terá 5 perguntas com 4 opções de resposta cada. Para cada resposta correta, você ganha pontos.
          </p>
          <p className="mb-4">
            No final do jogo, sua pontuação será exibida, e você poderá participar de um sorteio especial na roleta.
          </p>
          <p className="mb-4">
            Prepare-se e boa sorte! Clique no botão abaixo para começar o quiz e testar suas habilidades.
          </p>
        </div>
        <button
          onClick={() => setScreen(3)}  // Vai para a tela de Quiz
          className="mt-8 rounded-lg transition duration-300"
          style={{
            padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)', // Responsividade para o botão
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Ajuste do tamanho da fonte do botão
            backgroundColor: '#22c55e',
            color: 'white',
          }}
        >
          Iniciar Quiz
        </button>
      </div>
    );
  }
  