import video from '../../assets/quiz.mp4'

export default function PresentationScreen({ setScreen }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 5rem)', // Responsividade no texto principal
            }}>
          Bem-vindo ao Jogo!
        </h1>
        <p
          className="text-white mt-4"
          style={{
            fontSize: 'clamp(1rem, 2vw, 2rem)', // Responsividade no parágrafo
          }}
        >
          Prepare-se para aprender e se divertir.
        </p>
        <button
          onClick={() => setScreen(2)}
          className="mt-8 px-8 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-700 transition duration-300"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Responsividade no botão
          }}
        >
          Vamos Começar
        </button>
      </div>
    </div>
  );
}
