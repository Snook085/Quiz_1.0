

export default function InstructionsScreen({ setScreen }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white px-4">
        <h1 className="text-4xl font-bold mb-6">Instruções do Jogo</h1>
        <div className="text-lg leading-relaxed max-w-2xl text-center">
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
          className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Iniciar Quiz
        </button>
      </div>
    );
  }